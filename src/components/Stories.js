let infoStories = [
    { name:'9gag',
      pic:'./assets/img/9gag.svg'},
    { name:'meowed',
      pic:'./assets/img/meowed.svg'},
    { name:'barked',
      pic:'./assets/img/barked.svg'},
    { name:'nathanwpylestrangeplanet',
      pic:'./assets/img/nathanwpylestrangeplanet.svg'},
    { name:'wawawicomics',
      pic:'./assets/img/wawawicomics.svg'},
    { name:'respondeai',
      pic:'./assets/img/respondeai.svg'},
    { name:'filomoderna',
      pic:'./assets/img/filomoderna.svg'},
    { name:'memeriagourmet',
      pic:'./assets/img/memeriagourmet.svg'}
  ]
  
export default function Stories(){
    return(
        <section class="stories">
            { infoStories.map( storie => 
            <Storie storie={storie} />)}
            <Icon />
        </section>
    );    
}

function Storie(props){
    const {name, pic} = props.storie;

    return(
    <div class="story">
        <div class="imagem">
            <img src={pic} />
        </div>
        <div class="usuario">{name}</div>
    </div>
    );
}

function Icon(){
    return(
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div> 
    );
}