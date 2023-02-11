const React = require('react')
const Default = require('./layouts/default')

function Index ({ brands }) {
    return (
      <Default>
        <h2>Index Page</h2>
        {
          brands.map((brand, index) => {
            return (
              <li key={index}>
                <a href={`/brands/${index}`}>
                     {brand.name}
                </a>
                </li>
            )
        })
      }
      </Default>
    )
}

module.exports = Index