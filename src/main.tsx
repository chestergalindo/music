
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
const container = document.getElementById('root');
const root = createRoot(container!);
import { App } from './App'; 
root.render(<App />);
