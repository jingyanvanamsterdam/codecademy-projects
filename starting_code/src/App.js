import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'; 

// Add react-router-dom imports

// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<HomePage/>} />
    <Route path=":type" element={<HomePage/>} />
    <Route path=":type/:id" element={<PetDetailsPage/>} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;

/*
Your objective will be to add client-side routing to the application using React Router so that:

The HomePage component responds to the browser’s current URL by displaying only pets of the species the user wishes to view.

The PetDetailsPage page displays when the browser’s current URL includes a specific pet’s id.

The PetDetailsPage displays data for the correct pet based on the id in the URL parameters’ values.

When the user searches for a pet in the search bar, they are redirected to the SearchPage, which uses the query parameter called name to filter pets by name.

When a user clicks a pet whose details are not available, they are redirected to a PetNotFoundPage.

From the PetNotFound page, users can click “Go Home” button that will take them to the root path page.
*/