import React from 'react'


import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  // const handleRemove = () => {
  //   handleRemoveRepo(repo.id)
  // }

  return (
    <ItemContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" className="verRepo" target="_blank">Ver repositório</a><br />
        <button type="button" onClick={() => handleRemoveRepo(repo.id)} rel="noreferrer" className="remover">Remover</button>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
