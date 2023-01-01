import React from 'react';
import Message from '../AVISOS/Message';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error:null, errorInfo:null };
      }
    
      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({
            error: error,
            errorInfo: errorInfo
      })
    }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return(
            <div>
                <h1>algo deu errado</h1>;
            </div>
          ) 
        }
    
        return this.props.children; 
      }
}

export default ErrorBoundary