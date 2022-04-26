import React from 'react';
import Footer from '../Footer';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    margin: '5px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '45%',
    minWidth: '100px'
  },
  cardBody: {
    padding: '0',
  },
  pic: {
    width: '100%',
    maxWidth: '300px',
    marginRight: '10px'
  }
};

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div style={styles.container}>

        <div className="card" style={styles.card} >
          <a href="https://google.com">
            <img src="https://picsum.photos/300" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Project 1</h5>
            <p className="card-text">This is a description about the project.</p>
            <a href="https://github.com/Sean-Duiser" className="btn btn-primary">View Repo Here</a>
          </div>
        </div>

        <div className="card" style={styles.card} >
          <a href="https://google.com">
            <img src="https://picsum.photos/301" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">This is a description about the project.</p>
            <a href="https://github.com/Sean-Duiser" className="btn btn-primary">View Repo Here</a>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <a href="https://google.com">
            <img src="https://picsum.photos/302" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Project 3</h5>
            <p className="card-text">This is a description about the project.</p>
            <a href="https://github.com/Sean-Duiser" className="btn btn-primary">View Repo Here</a>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <a href="https://google.com">
            <img src="https://picsum.photos/303" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Project 4</h5>
            <p className="card-text">This is a description about the project.</p>
            <a href="https://github.com/Sean-Duiser" className="btn btn-primary">View Repo Here</a>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <a href="https://google.com">
            <img src="https://picsum.photos/304" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Project 5</h5>
            <p className="card-text">This is a description about the project.</p>
            <a href="https://github.com/Sean-Duiser" className="btn btn-primary">View Repo Here</a>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <a href="https://google.com">
            <img src="https://picsum.photos/305" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Project 6</h5>
            <p className="card-text">This is a description about the project.</p>
            <a href="https://github.com/Sean-Duiser" className="btn btn-primary">View Repo Here</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
