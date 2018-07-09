function CoolComponent({adjective = 'cool'}){
	return <p>Youpi so {adjective} youah JSX</p>
}

ReactDOM.render(
	<div>
		<CoolComponent adjective= 'awesome' />
		<CoolComponent />
	</div>,
	document.getElementById('root')
)
