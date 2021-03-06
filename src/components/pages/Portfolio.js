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
    minWidth: '100px',
    justifyContent: 'space-evenly',
    backgroundColor: '#4DA167',
    borderRadius: '10px',
    paddingLeft: '10px',
    paddingBottom: '10px',
    paddingRight: '10px'
  },
  cardBody: {
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#4DA167',
    borderRadius: '10px',
  },
  pic: {
    width: '100%',
    maxWidth: '300px',
    marginRight: '10px',
    borderRadius: '10px',
    marginTop: '10px',
  },
  body: {
    backgroundColor: '#846C5B',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  h1: {
    color: '#4DA167',
  },
  p: {
    color: '#FFFBFA',
    display: 'flex',
    textAlign: 'center',
  },
  h5: {
    color: '#846C5B',
    fontSize: 'larger',
  },
  submit: {
    backgroundColor: '#49C6E5',
    borderRadius: '10px',
    marginBottom: '10px',
    color: '#FFFBFA',
    fontWeight: 'bold',
  }
};

export default function Portfolio() {
  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Portfolio Page</h1>
      <div style={styles.container}>

        <div className="card" style={styles.card} >
          <a href="https://still-anchorage-60847.herokuapp.com/" target="_blank">
            <img src="https://picsum.photos/300" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.p} className="card-title">Project 1</h5>
            <p style={styles.p} className="card-text">This is a description about the project.</p>
            <a style={styles.submit} href="https://github.com/Rich-afk/lfgg" className="btn btn-primary" target="_blank">View Repo Here</a>
          </div>
        </div>

        <div className="card" style={styles.card} >
          <a href="https://sean-duiser.github.io/national-park-weather/" target="_blank">
            <img src="https://picsum.photos/301" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.p} className="card-title">Project 2</h5>
            <p style={styles.p} className="card-text">This is a description about the project.</p>
            <a style={styles.submit} href="https://github.com/Sean-Duiser/national-park-weather" className="btn btn-primary" target="_blank">View Repo Here</a>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <a href="https://sean-duiser.github.io/portfolio-homework/" target="_blank">
            <img src="https://picsum.photos/302" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.p} className="card-title">Project 3</h5>
            <p style={styles.p} className="card-text">This is a description about the project.</p>
            <a style={styles.submit} href="https://github.com/Sean-Duiser/portfolio-homework" className="btn btn-primary" target="_blank">View Repo Here</a>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <a href="https://frozen-escarpment-40573.herokuapp.com/notes" target="_blank">
            <img src="https://picsum.photos/303" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.p} className="card-title">Project 4</h5>
            <p style={styles.p} className="card-text">This is a description about the project.</p>
            <a style={styles.submit} href="https://github.com/Sean-Duiser/note-taker" className="btn btn-primary" target="_blank">View Repo Here</a>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <a href="https://sean-duiser.github.io/mini-project-css-cheatsheet/" target="_blank">
            <img src="https://picsum.photos/304" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.p} className="card-title">Project 5</h5>
            <p style={styles.p} className="card-text">This is a description about the project.</p>
            <a style={styles.submit} href="https://github.com/Sean-Duiser/mini-project-css-cheatsheet" className="btn btn-primary" target="_blank">View Repo Here</a>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <a href="https://sean-duiser.github.io/work-day-planner/" target="_blank">
            <img src="https://picsum.photos/305" style={styles.pic} alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.p} className="card-title">Project 6</h5>
            <p style={styles.p} className="card-text">This is a description about the project.</p>
            <a style={styles.submit} href="https://github.com/Sean-Duiser/work-day-planner" className="btn btn-primary" target="_blank">View Repo Here</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
