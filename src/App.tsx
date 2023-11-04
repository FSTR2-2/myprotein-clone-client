import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import ProteinPage from "./pages/ProteinPage/ProteinPage";
import NutritionPage from "./pages/NutritionPage/NutritionPage";
import VitaminsPage from "./pages/VitaminsPage/VitaminsPage";
import SnacksPage from "./pages/SnacksPage/SnacksPage";
import VeganPage from "./pages/VeganPage/VeganPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AccountHome from "./pages/AccountPage/AccountHome";
import AccountOrderHistory from "./pages/AccountPage/AccountOrderHistory";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/protein" element={<ProteinPage />} />
					<Route path="/nutrition" element={<NutritionPage />} />
					<Route path="/vitamins" element={<VitaminsPage />} />
					<Route path="/snacks" element={<SnacksPage />} />
					<Route path="/vegan" element={<VeganPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/accountHome" element={<AccountHome />} />
					<Route path="/accountOrderHistory" element={<AccountOrderHistory />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
