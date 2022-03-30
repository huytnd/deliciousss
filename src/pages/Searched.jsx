import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getResults = async (name) => {
        const response = await fetch(`
              https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${name}`);
        
        const data = await response.json();
        setSearchedRecipes(data.results);
    };
    
    useEffect(() => {
        getResults(params.search)
    }, [params.search])

    return (
        <>  
            {searchedRecipes.length === 0 && <h4>There is no recipes matching your search. Please try another one.</h4>}
            {searchedRecipes.length > 0 &&
                <Grid>
                    {searchedRecipes.map((item) => {
                        return(
                            <Card key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <h4>{item.title}</h4>
                            </Card>
                        )
            
                    })}
                </Grid>
            }
        </>
        
    )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;