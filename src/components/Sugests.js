let sugests = [
    { userPic: './assets/img/bad.vibes.memes.svg',
      name:'bad.vibes.memes'},
    { userPic: './assets/img/chibirdart.svg',
      name: 'chibirdart'},
    { userPic: './assets/img/razoesparaacreditar.svg',
      name: 'razoesparaacreditar'},
    { userPic: './assets/img/adorable_animals.svg',
      name: 'adorable_animals'},
    { userPic: './assets/img/smallcutecats.svg',
      name: 'smallcutecats'}
];

const dataUser = {
    profileName:'catanacomics', 
    userName:'Catana', 
    userPic:'assets/img/catanacomics.svg'
}

export default function SideBar(){
    return(
        <div class="sidebar">
            <TopSideBar />
            <Suggestions />
        </div>
    )
}

function TopSideBar(){
    return(
        <div class="usuario">
            <img src={dataUser.userPic} alt="nomenome" />
            <div class="texto">
                <strong>{dataUser.profileName}</strong>
                {dataUser.userName}
            </div>
        </div>
    );
}

function Suggestions(){
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
            <div>Ver tudo</div>

            </div>
            {sugests.map( (item) =>
            <Suggestion item ={item}  />
            )}    
        </div>
    )
}

function Suggestion(props){
    const {userPic, name} = props.item;

    return (
        <>        
        <div class="sugestao">
            <div class="usuario">
                <img src={userPic} alt={`Foto de usuario ${name} `}/>
                <div class="texto">
                    <div class="nome">{name}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
        </>
    )
}