import React from 'react'

const Indicator: React.FC<{color: string}> = ({color}) => {
    return <div className="indicator" style={{background: color}}></div>
}

export default Indicator
