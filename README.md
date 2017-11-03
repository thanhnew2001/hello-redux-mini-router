# hello-redux-mini-router

React/Redux is about single page application. However, SPA does not mean that the whole enterprise application should be packed in one big component.

Users should be able to navigate to different parts of the application and only relevant components should be showed. To support that, there are a number of libraries such as React-router, React-redux-router. 

The problem of these libraries is they rely on an Experiment API to work. Facebook advises us not to use this experiment API. 

There is a simpler way to do it. Using window.location, we can show/hide a component based on the URL.

We will need a component named Root to play the role of the App componnet. This Root component will have a menu bar and a conditional display to toggle corresponding components:

class Root extends React.Component{
    render(){
        let currentPath = window.location.pathname

        return(
            <div>
                <div>
                    <a href='/home'>Home</a> |
                    <a href='/about'>About</a>
                </div>   

                {currentPath.includes('/about')? 
                    <About />:
                    <App editedStudent={this.props.editedStudent} dispatch={this.props.dispatch} students={this.props.students} />
                }
            </div>    
        )
    }
}

Notes:
+ We add a menu bar that contains 2 links: Home and About on top of the Root component
+ We call the connect function in the Root component to get values from the stores
+ We use the includes method to check if the URL contains a specific value
+ Make sure that we inject properties for "dispatch". We will need the dispatch function for child components.
+ We need to add a historyApiFallback property to our devServer in webpack.config.js
    devServer: {
       historyApiFallback: true
    }
