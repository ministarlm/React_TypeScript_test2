import Header from "components/Header";
import NavMenu from "components/NavMenu";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./ContactPage";

const App = () => {
  const navItems = [
    { name: "Contacts", path: "/" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <>
      {/* <header className="header">
        <h1>CiaoBao</h1>
      </header> */}

      <Header title="ciao bao💔 ciao bao💔 ciao bao💔 "></Header>
      <main className="flex flex-column flex-align-center m-t-25">
        {/* <span onClick={() => toggleFavorites(false)}>Contacts</span>
        <span onClick={() => toggleFavorites(true)}>Favourites</span> */}

        <NavMenu className="m-b-20" items={navItems}></NavMenu>
        <Routes>
          <Route path="/" element={<ContactPage isFavorites={false} />} />
          <Route
            path="/favorites"
            element={<ContactPage isFavorites={true} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;

// // cd ~/Desktop/React_TypeScript/react-app
// // ~/Desktop/React_TypeScript_test1/react-app
