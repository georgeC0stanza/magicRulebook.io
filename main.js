
document.getElementById("beginningPhaseDiv").addEventListener(
    "click", 
    function(){ 
        var x = document.getElementById("beginningPhaseBasic");
        var y = document.getElementById("beginningPhaseSimple");
        var z = document.getElementById("beginningPhaseAdvanced");
        if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display = "none";
          z.style.display = "none";
        } else {
          x.style.display = "none";
          y.style.display = "block";
        }
    },
    true
);

document.getElementById("precombatMainPhaseDiv").addEventListener(
    "click", 
    function(){ 
        var x = document.getElementById("precombatMainPhaseBasic");
        var y = document.getElementById("precombatMainPhaseSimple");
        var z = document.getElementById("precombatMainPhaseAdvanced");
        if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display = "none";
          z.style.display = "none";
        } else {
          x.style.display = "none";
          y.style.display = "block";
        }
    },
    true
);



document.getElementById("combatPhaseDiv").addEventListener(
    "click", 
    function(){ 
        var x = document.getElementById("combatPhaseBasic");
        var y = document.getElementById("combatPhaseSimple");
        var z = document.getElementById("combatPhaseAdvanced");
        if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display = "none";
          z.style.display = "none";
        } else {
          x.style.display = "none";
          y.style.display = "block";
        }
    },
    true
);



document.getElementById("advancedViewToggle").addEventListener(
    "click", 
    function(){ 
        document.getElementById("beginningPhaseBasic").style.display = "none";
        document.getElementById("beginningPhaseSimple").style.display = "none";
        document.getElementById("beginningPhaseAdvanced").style.display = "block";
    },
    false
);
    
document.getElementById("simpleViewToggle").addEventListener(
    "click", 
    function(){ 
        document.getElementById("beginningPhaseBasic").style.display = "none";
        document.getElementById("beginningPhaseSimple").style.display = "block";
        document.getElementById("beginningPhaseAdvanced").style.display = "none";

    },
    false
);

document.getElementById("advancedViewTogglePrecombatMain").addEventListener(
    "click", 
    function(){ 
        document.getElementById("precombatMainPhaseBasic").style.display = "none";
        document.getElementById("precombatMainPhaseSimple").style.display = "none";
        document.getElementById("precombatMainPhaseAdvanced").style.display = "block";

    },
    false
);


document.getElementById("simpleViewTogglePrecombatMain").addEventListener(
    "click", 
    function(){ 
        document.getElementById("PrecombatMainPhaseBasic").style.display = "none";
        document.getElementById("PrecombatMainPhaseSimple").style.display = "block";
        document.getElementById("PrecombatMainPhaseAdvanced").style.display = "none";

    },
    false
);



document.getElementById("advancedViewToggleCombat").addEventListener(
    "click", 
    function(){ 
        document.getElementById("combatPhaseBasic").style.display = "none";
        document.getElementById("combatPhaseSimple").style.display = "none";
        document.getElementById("combatPhaseAdvanced").style.display = "block";
    },
    false
);
    
document.getElementById("simpleViewToggleCombat").addEventListener(
    "click", 
    function(){ 
        document.getElementById("combatPhaseBasic").style.display = "none";
        document.getElementById("combatPhaseSimple").style.display = "block";
        document.getElementById("combatPhaseAdvanced").style.display = "none";

    },
    false
);






document.getElementById("btn_0_expandToggle").addEventListener(
    "click", 
    function(){ 
        var x = document.getElementById("0.0");
        var y = document.getElementById("btn_0_expandToggle");
        if (x.style.display === "none") {
          x.style.display = "block";
          y.textContent = "-";
        } else {
          x.style.display = "none";
          y.textContent = "+";

        }
    }
);

document.getElementById("btn_0_expand").addEventListener(
    "click", 
    function(){ 
        document.getElementById("0.0").style.display = "block";
    }
);
    


    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      } 