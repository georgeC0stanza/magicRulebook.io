/********************************************************
 * Event handlers for the basic view
 */
function viewExpander(divPartial){
    var x = document.getElementById(divPartial + "Basic");
    var y = document.getElementById(divPartial + "Simple");
    var z = document.getElementById(divPartial + "Advanced");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
}

function viewMinimizer(divPartialList){
    divPartialList.forEach(element => {
        document.getElementById(element + "Basic").style.display = "block";
        document.getElementById(element + "Simple").style.display = "none";
        document.getElementById(element + "Advanced").style.display = "none";
    });

}

document.getElementById("beginningPhaseDiv").addEventListener(
    "click", 
    function(){
        viewExpander("beginningPhase");
        viewMinimizer(["precombatMainPhase", "combatPhase", "postcombatMainPhase", "endPhase"]);
    },
    true
);

document.getElementById("precombatMainPhaseDiv").addEventListener(
    "click", 
    function(){ 
        viewExpander("precombatMainPhase");
        viewMinimizer(["beginningPhase", "combatPhase", "postcombatMainPhase", "endPhase"]);
    },
    true
);

document.getElementById("combatPhaseDiv").addEventListener(
    "click", 
    function(){ 
        viewExpander("combatPhase");
        viewMinimizer(["beginningPhase", "precombatMainPhase", "postcombatMainPhase", "endPhase"]);
    },
    true
);

document.getElementById("postcombatMainPhaseDiv").addEventListener(
    "click", 
    function(){ 
        viewExpander("postcombatMainPhase");
        viewMinimizer(["beginningPhase", "precombatMainPhase", "combatPhase", "endPhase"]);
    },
    true
);

document.getElementById("endPhaseDiv").addEventListener(
    "click", 
    function(){ 
        viewExpander("endPhase")
        viewMinimizer(["beginningPhase", "precombatMainPhase", "combatPhase", "postcombatMainPhase"]);
    },
    true
);

/********************************************************
 * Button event handlers
 */
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
        document.getElementById("precombatMainPhaseBasic").style.display = "none";
        document.getElementById("precombatMainPhaseSimple").style.display = "block";
        document.getElementById("precombatMainPhaseAdvanced").style.display = "none";

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

document.getElementById("advancedViewTogglePostcombatMain").addEventListener(
    "click", 
    function(){ 
        document.getElementById("postcombatMainPhaseBasic").style.display = "none";
        document.getElementById("postcombatMainPhaseSimple").style.display = "none";
        document.getElementById("postcombatMainPhaseAdvanced").style.display = "block";

    },
    false
);
document.getElementById("simpleViewTogglePostcombatMain").addEventListener(
    "click", 
    function(){ 
        document.getElementById("postcombatMainPhaseBasic").style.display = "none";
        document.getElementById("postcombatMainPhaseSimple").style.display = "block";
        document.getElementById("postcombatMainPhaseAdvanced").style.display = "none";

    },
    false
);

document.getElementById("advancedViewToggleEnd").addEventListener(
    "click", 
    function(){ 
        document.getElementById("endPhaseBasic").style.display = "none";
        document.getElementById("endPhaseSimple").style.display = "none";
        document.getElementById("endPhaseAdvanced").style.display = "block";
    },
    false
);
document.getElementById("simpleViewToggleEnd").addEventListener(
    "click", 
    function(){ 
        document.getElementById("endPhaseBasic").style.display = "none";
        document.getElementById("endPhaseSimple").style.display = "block";
        document.getElementById("endPhaseAdvanced").style.display = "none";

    },
    false
);