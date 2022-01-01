import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
function App() {
	return (
		<>
			<div
				className='template-color-1 spybody'
				data-spy='scroll'
				data-target='.navbar-example2'
				data-offset='150'>
		    <Header />
				<div className='main-page-wrapper'>
					<HeroSection />
				</div>
			</div>
		</>
	);
}

export default App;
