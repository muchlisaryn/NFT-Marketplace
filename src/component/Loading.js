export default  function LoadingSvg () {
    return (
        <div style={{background : "#1F0443", width : '100%', height : '800px'}} className="d-flex justify-content-center">
            <svg
        style={{
            margin: 'auto',
            background: 'none',
            display: 'block', 
            shaperendering: 'auto' ,
        }}
        width='200px' 
        height='200px' 
        viewBox='0 0 100 100' 
        preserveAspectRatio='xMidYMid'>

        <path 
        fill="none" 
        stroke="#e90c59"
        stroke-width="8"
        stroke-dasharray="42.76482137044271 42.76482137044271" 
        d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" 
        stroke-linecap="round" 
        style={{transform:'scale(0.8)', transformorigin:'50px 50px' }}
        >
          <animate 
          attributeName="stroke-dashoffset" 
          repeatCount="indefinite" 
          dur="2.564102564102564s" 
          keyTimes="0;1" 
          values="0;256.58892822265625"
          ></animate>
        </path>
        </svg>
        </div>
    )
}