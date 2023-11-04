import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

type PageWrapperProps = {
  children: React.ReactNode; 
}

const PageWrapper = ({children}: PageWrapperProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;