import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          color: '#1e3a8a',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '600' }}>
              Oops! Something went wrong
            </h1>
            <p style={{ marginBottom: '1.5rem', opacity: 0.8, fontSize: '1.1rem' }}>
              We're sorry, but there was an error loading Satya's portfolio. 
              This is usually a temporary issue.
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <button
                onClick={() => {
                  // Clear any potential localStorage issues
                  try {
                    localStorage.clear();
                  } catch (e) {
                    // Ignore
                  }
                  window.location.reload();
                }}
                style={{
                  backgroundColor: '#1e3a8a',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  marginRight: '1rem',
                  fontWeight: '500'
                }}
              >
                🔄 Reload Page
              </button>
              
              <button
                onClick={() => {
                  // Reset to a known good state
                  try {
                    localStorage.clear();
                    sessionStorage.clear();
                  } catch (e) {
                    // Ignore
                  }
                  window.location.href = window.location.origin;
                }}
                style={{
                  backgroundColor: '#64748b',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                🏠 Reset & Go Home
              </button>
            </div>

            <div style={{ 
              backgroundColor: '#f8fafc', 
              padding: '1rem', 
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              marginBottom: '1rem'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
                💡 <strong>Quick fixes:</strong> Try refreshing the page, clearing your browser cache, 
                or visiting the site in an incognito/private window.
              </p>
            </div>

            {this.state.error && (
              <details style={{ marginTop: '1rem', textAlign: 'left' }}>
                <summary style={{ 
                  cursor: 'pointer', 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  color: '#64748b'
                }}>
                  🔧 Technical Details (for developers)
                </summary>
                <pre style={{
                  backgroundColor: '#f1f5f9',
                  padding: '1rem',
                  borderRadius: '0.25rem',
                  overflow: 'auto',
                  fontSize: '0.75rem',
                  color: '#374151',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}>
                  {this.state.error.name}: {this.state.error.message}
                  {'\n\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;