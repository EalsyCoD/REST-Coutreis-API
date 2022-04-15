import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountries } from '../../ducks/actions/CountriesAction'
import { RootState } from '../../types'

import { Container, SearchIcon, Input, Button } from './styles'

const SearchBar = (): JSX.Element => {
  const state = useSelector((state: RootState) => state.countries)
  console.log(state)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState<string>('')

  const handleSubmit = () => {
    if (value.length > 1) {
      dispatch(setCountries(value))
      console.log(value)
    } 
  }

  return (
    <React.Fragment>
      <Container>
        <SearchIcon />
        <Input
          type='text'
          placeholder="Search for a country..."
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
        <Button onClick={handleSubmit}>
          Search
        </Button>
      </Container>
    </React.Fragment>
  )
}

export default SearchBar