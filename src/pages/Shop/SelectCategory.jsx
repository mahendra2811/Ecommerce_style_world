import React from 'react'

const SelectCategory = (select) => {
  return (
    <select defaultValue={select}>
    <option value="all">All Categories</option>
    <option value="Mens">Mens</option>
    <option value="Boys">Boys</option>
    <option value="Girls">Childrens</option>
                         
</select>
  )
}

export default SelectCategory