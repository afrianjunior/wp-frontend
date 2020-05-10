import React, { useState, useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import POKEMONS_QUERY from '@/gql/pokemonsQuery'
import { Div, Text, Input, Icon } from 'atomize'
import { Pokemons, Error } from '@/app/components'

function Home () {
  const [pokemonsVariables, setPokemonsVariables] = useState({ first: 20 })
  const [searchInput, setSearchInput] = useState('')
  const { loading, error, data, fetchMore } = useQuery(POKEMONS_QUERY, {
    variables: pokemonsVariables
  })

  const handleScroll = useCallback(() => {
    const scrollTop =
      document.documentElement && document.documentElement.scrollTop
    const offsetHeight =
      document.documentElement && document.documentElement.offsetHeight

    if (window.innerHeight + scrollTop !== offsetHeight) return

    fetchMore({
      variables: { ...pokemonsVariables, first: pokemonsVariables.first + 6 },
      updateQuery: (prev, { fetchMoreResult, variables }) => {
        setPokemonsVariables(variables)
        if (!fetchMoreResult) return prev
        return Object.assign({}, prev, {
          pokemons: [...fetchMoreResult.pokemons]
        })
      }
    })
  }, [fetchMore, pokemonsVariables])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  function searchChangesHandler (event) {
    setSearchInput(event.target.value.toLowerCase())
  }

  function filterPokemons (pokemons) {
    return pokemons.filter(({ name, classification, types }) => {
      const lowerName = name.toLowerCase()
      const lowerClassification = classification.toLowerCase()
      const lowerTypes = types.join(' ').toLowerCase()

      return lowerName.includes(searchInput) ||
      lowerClassification.includes(searchInput) ||
      lowerTypes.includes(searchInput)
    })
  }

  return (
    <>
      <Div
        m={{ b: '40px' }}
        textAlign="center"
      >
        <Text tag="h1" textSize="display2">Pokedex</Text>
        <Input
          placeholder="Search name, type or classification"
          m={{ t: '1rem' }}
          onChange={searchChangesHandler}
          suffix={
            <Icon
              name="Search"
              size="20px"
              cursor="pointer"
              onClick={() => console.log('clicked')}
              pos="absolute"
              top="50%"
              right="1rem"
              transform="translateY(-50%)"
            />
          }
        />
      </Div>

      {error && <Error message="Something error when fetch pokemons, please check your internet connection." />}

      {!data ? 'Fetching...' : <Pokemons pokemons={filterPokemons(data.pokemons)} redirect={Link} />}

      {data && loading ? <Text
        tag="div"
        textAlign="center"
        p={{ y: '1rem' }}
      >
        <Icon name="Loading" />
      </Text> : null}
    </>
  )
}

export default Home
