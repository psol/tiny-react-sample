import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Search } from './store'

function GitHub(props) {
  let result = [ <button key='button' onClick={e => props.dispatch(Search())}>On GitHub</button> ]
  if (props.results.length > 0) {
    result.push(<ul key='results'>
        {props.results.map(result => <li key={result.id}>
            <a href={result.html_url}>{result.login}</a>
          </li>)}
      </ul>)
  }
  return result
}

GitHub.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { results: state.github }
}

export default connect(mapStateToProps)(GitHub)