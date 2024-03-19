import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { DNA } from 'react-loader-spinner'
import { SpinnerCircular } from 'spinners-react'
import  "./loading.css"

function LoadingSpiner() {
  return (
    <div className="DNA">
      {/* <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button> */}
      {/* <SpinnerCircular size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" /> */}
      
  <DNA 
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />

  
    </div>
  )
}

export default LoadingSpiner
