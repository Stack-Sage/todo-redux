import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import Todos from './components/Todo';

function App() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-950  flex flex-col items-center justify-start p-10">
      
      <div className="w-screen max-w-xl ">
        <AddTodo />
       
        <Todos />
     
      </div>
    </div>
       <div className='fixed bottom-0.5 w-full opacity-80 mx-auto  '>
       <Footer/>
     </div>
     </>
    
  );
}

export default App;
