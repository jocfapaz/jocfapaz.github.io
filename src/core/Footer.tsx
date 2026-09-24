import githubIcon from '../assets/github.svg'
function Footer(){
    return(
        <footer className="max-w-4xl mx-auto bg-slate-900 text-slate-400 py-8 px-6 mt-12 rounded-2xl border-t border-slate-800 shadow-lg">
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
    <p className="text-center sm:text-left">
      © 2026 <span className="text-white font-medium">Josefa Roca</span>.
    </p>
    <div className="flex gap-6 text-xs">
      <a href="mailto:josefarocaliberon@gmail.com" className="hover:text-pink-400 transition-colors">Email</a>
      <a href="https://github.com/jocfapaz" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">GitHub
      <img src = {githubIcon} alt="Github" className= "w-6 h-6"/>
      </a>
      <a href="./pets.html" className="hover:text-pink-400 transition-colors">Mascotas</a>
      <a href="#cv" className="hover:text-pink-400 transition-colors">Volver arriba ↑</a>
    </div>
  </div>    
</footer>
    )
}
export default Footer