import './Content.css';

const Content = ( props: any ) => {
      return (
            <div className="container content-container">
                  { props.children }
            </div>
      );
}

export default Content;