mtoggle = 0
stoggle = 0
state = 0

//setting game
let content = [
  "Revelation is revealed...",
  "...through time",
  "There are good questions...",
  "...and there are inspired questions",
  "God is perfect...",
  "...but his servants are not",
  "Doubt your doubts...",
  "...before you doubt your faith",
  "We can never fully see...",
  "...God's whole plan",
  "In the end...",
  "...it's all about the core",
  "The natural man...",
  "...is an enemy to God",
  "The restoration...",
  "...is ongoing",
]
let color = [
  "rgb(210,255,210)",
  "rgb(210,255,210)",
  "rgb(215,210,255)",
  "rgb(215,210,255)",
  "rgb(250,250,190)",
  "rgb(250,250,190)",
  "rgb(200,220,255)",
  "rgb(200,220,255)",
  "rgb(255,210,250)",
  "rgb(255,210,250)",
  "rgb(250,250,250)",
  "rgb(250,250,250)",
  "rgb(255,190,190)",
  "rgb(255,190,190)",
  "rgb(250,220,200)",
  "rgb(250,220,200)",
]
let ids1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let ids2 = []

function resetG() {
  ids1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  ids2.length = 0
  count = 0
  lastc = ""
  lastid = -1
  correct = []
  document.getElementById("win").style.display = "none"
  for (let i = ids1.length - 1; i > -1; i--) {
    rand = Math.floor(Math.random() * ids1.length)
    ids2.push(ids1.splice(rand, 1)[0])
    document.getElementById("g" + i).innerText = ""
    document.getElementById("g" + i).style.backgroundColor = "rgb(150,150,161)"
    document.getElementById("g" + i).style.border = "6px solid rgb(80,80,91)"
  }
}

resetG()

function switch2(var1) {
  id = var1.id
  selected = id.charAt(1)
  scrollTo({ top: 0, left: 0, behavior: "smooth" })

  for (let n = 5; n > 0; n--) {
    if (n != selected) {
      document.getElementById("p" + n).style.display = "none"
      document.getElementById("b" + n).className = "b" + n + " ab"
    }
  }
  if (id != "b0") {
    document.getElementById(id).className = "bselected " + id + " ab"
  }
  document.getElementById("p" + selected).style.display = "block"
  if (window.innerWidth < 580) {
  	document.getElementById("hold").style.animation = "closeM 0.2s"
  	setTimeout(function () {
      document.getElementById("hold").style.display = "none"
    }, 180)
    mtoggle = 0
  }
}

function openS() {
  if (stoggle === 0) {
    document.getElementById("settingsM").style.display = "block"
    document.getElementById("settingsM").style.animation = "open 0.2s"
    stoggle = 1
  } else {
    document.getElementById("settingsM").style.animation = "close 0.2s"
    setTimeout(function () {
      document.getElementById("settingsM").style.display = "none"
    }, 180)
    stoggle = 0
  }
}

function switch3() {
  if (state === 0) {
    document.getElementById("is").className = "is is1"
    document.getElementById("bgs").className = "bgs bgs1"
    state = 1
  } else {
    document.getElementById("is").className = "is is2"
    document.getElementById("bgs").className = "bgs bgs2"
    state = 0
  }
}

function myfunc(clicked) {
  let id = clicked.id
  let id2 = parseInt(id.replace(/\D/g, ""))
  let newid = ids2[id2]
  if (id2 != lastid && !correct.includes(id2)) {
    if (count === 2) {
      for (let i = 0; i < 16; i++) {
        if (!correct.includes(i)) {
          document.getElementById("g" + i).innerText = ""
          document.getElementById("g" + i).style.backgroundColor =
            "rgb(150,150,161)"
          document.getElementById("g" + i).style.border =
            "6px solid rgb(80,80,91)"
        }
      }
      count = 0
    }
    let mycontent = content[newid]
    let mycolor = color[newid]
    document.getElementById(id).innerText = mycontent
    document.getElementById(id).style.backgroundColor = mycolor
    document.getElementById(id).style.border = "6px solid rgb(130,130,140)"
    if (count === 1) {
      if (mycolor === lastc) {
        correct.push(id2)
        correct.push(lastid)
        document.getElementById("g" + lastid).style.border =
          "0 solid rgb(240,255,240)"
        document.getElementById("g" + id2).style.border =
          "0 solid rgb(240,255,240)"
        document.getElementById("g" + lastid).style.padding = "12px"
        document.getElementById("g" + id2).style.padding = "12px"
        if (correct.length === 16) {
          document.getElementById("win").style.display = "block"
        }
      }
    } else {
      lastc = mycolor
      lastid = id2
    }
    count = count + 1
  }
}


function openmenu() {
	if (mtoggle === 0) {
  	mtoggle = 1
    document.getElementById("hold").style.animation = "openM 0.2s"
    show()
  }
  else {
  	mtoggle = 0
    document.getElementById("hold").style.animation = "closeM 0.2s"
  	setTimeout(function () {
      	show()
    	}, 180)
  }
}

function show() {
	if (window.innerWidth > 580) {
  	document.getElementById("hold").style.display = "flex"
    document.getElementById("hold").style.animation = ""
  }
  else {
  	if (mtoggle === 0) {
      document.getElementById("hold").style.display = "none"
 		 }
  	else {
    	document.getElementById("hold").style.display="flex"
   	  
  		
  	}
  }
}

window.addEventListener('resize', show);

