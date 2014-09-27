/************************************************************************/
/***  Stacked Menu Code                         ***/
/***  BATTLE GAME BETA V1 ***/
/*** Author = Sterling Baldwin ***/
/*** Team Members - Sterling Baldwin, Patrick Love, Jay ***/
/************************************************************************/

var sm_MaxHeight = [[60, 420]]; //menu height, content height
var sm_ShrinkTimer = [];
var sm_Open = [[0,0]];  //array --> x=menu number, y=0/1, where 0=menu, 1=contents --> values 0,1
var sm_cOpen;   //array of 0/1
var sm_SelectedNum;
var sm_IdPrefix = "m";
var sm_ContentsIdPrefix = "cm";
var sm_TimeVar = 18;
var sm_HideMenus = 0; // 0/1 = false/true

function selectStack(myNum, myHideMenus) {

    //alert(document.getElementById(mid).style.height);

    var mymID = sm_IdPrefix + myNum;
    var mycID = sm_ContentsIdPrefix + myNum;
    var hideMunus;

    if(sm_HideMenus == 1 || myHideMenus == 1) HideMenus = 1;

    sm_SelectedNum = myNum;     // mark this one as SELECTED

    //toggle contents

    if (sm_Open[myNum-1][1] == 0) {     // if contents are closed then OPEN
      startExpand(sm_ContentsIdPrefix, myNum, sm_TimeVar, sm_MaxHeight[myNum-1][1], 1);

      if (HideMenus){
        for(var i=1; i <= sm_Open.length; i++)    //hide all other menus
        {
          if (i != myNum && sm_Open[i-1][0] == 1) {
            startShrink(sm_IdPrefix, i, sm_TimeVar, sm_MaxHeight[i-1][0], 0);
          }
        }
      }
      for(var i=1; i <= sm_Open.length; i++)    //hide all other contents
      {
        if(i !=myNum && sm_Open[i-1][1] == 1)
          startShrink(sm_ContentsIdPrefix, i, sm_TimeVar, sm_MaxHeight[i-1][1], 0);
      }
    } else {
      startShrink(sm_ContentsIdPrefix, myNum, sm_TimeVar, sm_MaxHeight[myNum-1][1], 1); // CLOSE

      for (var i=1; i<= sm_Open.length; i++)    //make sure to show all menus
      {
        if(sm_Open[i-1][0]==0) {
          startExpand(sm_IdPrefix, i, sm_TimeVar, sm_MaxHeight[i-1][0], 1);
        }
      }
    }

}

function startExpand(myPrefix, myN, Time, MaxHeight, DoFade) {

  var myID = myPrefix + myN;
  document.getElementById(myId).style.display = "block";
  doShrink(myPrefix, myN, Time, MaxHeight, DoFade, 1, 0);
}

function startShrink(myPrefix, myN, Time, MaxHeight, DoFade) {
  doShrink(myPrefix, myN, Time, MaxHeight, DoFade, -1, 100);
}

function doShrink(myPrefix, myN, Time, MaxHeight, DoFade, Direction, Percent) {
  var myId = myPrefix + myNum;
  var myObj = document.getElementById(myId);
  var myType;
  if(myPrefix == sm_IdPrefix) myType = 0;
  else myType = 1;

  Percent = Percent + (Direction * 5);
  Time = Time * 0.5;

  myObj.style.height = MaxHeight * (Percent/100) + "px";
  if(DoFade==1) Opacity(myObj, (Percent/100));

  if(Percent <= 0 && Direction == -1) {
    sm_Open[myNum-1][myType] = 0;   //marked closed
;
    myObj.style.dislay = "none";

  } else if(Percent >= 100 && Direction == 1) {

    sm_Open[myNum-1][myType] = 1; //marked open

  } else {
    var fn = "doShrink('"+ myPrefix +"',"+ myNum +"," + Time +"," + MaxHeight + ","+ DoFade +","+ Direction +","+ Percent+")";
    sm_ShrinkTimer[myNum-1] = setTimeout(fn, Time);

  }

}



/*** --- GENERIC FUNCTIONS ---***/

function Opacity(theObj, Op) {
  theObj.style.opacity = Op;    //standard
  theObj.style.filter = 'alpha(opacity=' + Op * 100 + ')';
    //IE-->sucks
}
