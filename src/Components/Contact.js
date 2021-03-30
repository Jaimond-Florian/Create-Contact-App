import './Contact.css';

const name = 'Hydrog3n';
  const online = true;
  const avatar = 'https://avatars.githubusercontent.com/u/62655839?s=60&v=4', alt='Flo';


function Contact(){
    return (
      <div className="Contact">
        <img className = "avatar" src={avatar}/>
          <div>
            <h3 className = "name">{name}</h3>
               <div className = "status">
               <div className = {online ? 'status-online' : 'status-offline'}></div>
                <p className ="status-text">{online ? "online" : "Offline"}</p>
              </div>
          </div>
     </div>
  )
  
  
}
export default Contact;

