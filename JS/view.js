//--------------------------View------------------------------
updateView();

function updateView() {
  app.innerHTML = /*HTML*/ ` 

  <div id="outputWords">
    In a <span class="blank">____</span> city, there lived a 
    <span class="blank">____</span> mercenary named Deadpool. 
    He had a <span class="blank">____</span> suit that made him look like a walking tomato.
    Every day, he would explore the <span class="blank">____</span> streets, 
    filled with <span class="blank">____</span> pedestrians and <span class="blank">____</span>
    villains. One day, Deadpool discovered a <span class="blank">____</span> taco truck 
    with <span class="blank">____</span> tacos that were ready to party. 
    Excited, he decided to invite his friends 
    to enjoy the <span class="blank">____</span> adventure together. They laughed and played,
    creating <span class="blank">____</span> memories that would last forever.
</div>


  <div id="wordButtons">
    <div onclick="inputWord(this)">mysterious</div>
    <div onclick="inputWord(this)">nutty</div>
    <div onclick="inputWord(this)">zesty</div>
    <div onclick="inputWord(this)">devious</div>
    <div onclick="inputWord(this)">unpredictable</div>
    <div onclick="inputWord(this)">sparkling</div>
    <div onclick="inputWord(this)">dirty</div>
    <div onclick="inputWord(this)">enchanting</div>
    <div onclick="inputWord(this)">badass</div>
    <div onclick="inputWord(this)">insane</div>
    <div onclick="inputWord(this)">raunchy</div>
    <div onclick="inputWord(this)">flamboyant</div>
    <div onclick="inputWord(this)">clueless</div>
    <div onclick="inputWord(this)">whiny</div>
    <div onclick="inputWord(this)">useless</div>
    <div onclick="inputWord(this)">moronic</div>
    <div onclick="updateView()">Restart</div>
  </div>
  `;
}
