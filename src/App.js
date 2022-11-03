import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import BucketList from './components/Pages/BucketList';

function App() {
  return (
    <Router>
        <div className="flex-column justify-center align-center min-100-vh main">
          <Header/>
          <div className="container">
            <Routes>
              {/* *********** Home Route *********** */}
              <Route path="/" element={<Home />} />

              {/* *********** Login Route *********** */}
              <Route path="/login" element={<Login />} />

              {/* *********** Quiz Route *********** */}
              <Route path="/quiz" element={<Quiz />} />

              {/* *********** All User Battle Routes *********** */}
              <Route path="/battles" element={<UserBattles />} />

              {/* *********** Matches Route *********** */}
              <Route path="/matches" element={<Matches />} />

              {/* *********** Signup Route *********** */}
              <Route path="/signup" element={<Signup />} />

              {/* *********** Battle Route *********** */}
              <Route path="/battle/:id" element={<Battle />} />

              {/* *********** Wild Card Route *********** */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
