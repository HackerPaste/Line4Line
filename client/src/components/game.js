var React = require('react')

class Game extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(

			<div>
				<img src="https://media.giphy.com/media/26hirPEihrhzOXIUo/giphy.gif" alt="Mountain View"/>
				<form>
					<input className="createStoryInput createTitleInput guessinput" value="What's your guess?" type="text" name="guess"/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		)


	}
}

module.exports = Game