function createScreens(){

  /*************************** Task 2_0 ***************************/

  screens_list[0].vectorID = -1;

  screens_list[0].vectorID++;
  var temp_vector = new createVector({
    parent: screens_list[0],
    cx: 0.2*body_width,
    cy: 0.8*body_height,
    r: 0.15*body_height,
    angle_rad: (1/3)*Math.PI,
    manipulationPossible: true,
    manipulables: { r: true, angle: true, xComponent: false, yComponent: false },
    resolution_allowed: false,
    movementAllowed: true,
    vector_mode: "polar",               // "cartesian", "polar"
    cartesian_mode_controls: "polar",   // "cartesian", "polar"
    vectorID: screens_list[0].vectorID,
    addition_allowed: true,
    addedVectors: false,
    taskScreen: true,
    delete_allowed: false,
    addition_resolution_allowed: false,
    addition_change_mode_allowed: false
  })
  appendmarker(screens_list[0].vectorID);
  screens_list[0].vector_list.push(temp_vector);

  screens_list[0].vectorID++;
  var temp_vector = new createVector({
    parent: screens_list[0],
    cx: 0.65*body_width,
    cy: 0.5*body_height,
    r: 0.15*body_height,
    angle_rad: (1/6)*Math.PI,
    manipulationPossible: true,
    manipulables: { r: true, angle: true, xComponent: false, yComponent: false },
    resolution_allowed: false,
    movementAllowed: true,
    vector_mode: "polar",               // "cartesian", "polar"
    cartesian_mode_controls: "polar",   // "cartesian", "polar"
    vectorID: screens_list[0].vectorID,
    addition_allowed: true,
    addedVectors: false,
    taskScreen: true,
    delete_allowed: false,
    addition_resolution_allowed: false,
    addition_change_mode_allowed: false
  })
  appendmarker(screens_list[0].vectorID);
  screens_list[0].vector_list.push(temp_vector);

  /*************************** Task 2_1 ***************************/

  screens_list[1].vectorID = -1;

  screens_list[1].vectorID++;
  var temp_vector = new createVector({
    parent: screens_list[1],
    cx: 0.2*body_width,
    cy: 0.8*body_height,
    r: 0.15*body_height,
    angle_rad: (1/3)*Math.PI,
    manipulationPossible: true,
    manipulables: { r: true, angle: true, xComponent: false, yComponent: false },
    resolution_allowed: false,
    movementAllowed: true,
    vector_mode: "polar",               // "cartesian", "polar"
    cartesian_mode_controls: "polar",   // "cartesian", "polar"
    vectorID: screens_list[1].vectorID,
    addition_allowed: true,
    addedVectors: false,
    taskScreen: true,
    delete_allowed: false,
    addition_resolution_allowed: false,
    addition_change_mode_allowed: false
  })
  appendmarker(screens_list[1].vectorID);
  screens_list[1].vector_list.push(temp_vector);

  screens_list[1].vectorID++;
  var temp_vector = new createVector({
    parent: screens_list[1],
    cx: 0.65*body_width,
    cy: 0.5*body_height,
    r: 0.15*body_height,
    angle_rad: (1/6)*Math.PI,
    manipulationPossible: true,
    manipulables: { r: true, angle: true, xComponent: false, yComponent: false },
    resolution_allowed: false,
    movementAllowed: true,
    vector_mode: "polar",               // "cartesian", "polar"
    cartesian_mode_controls: "polar",   // "cartesian", "polar"
    vectorID: screens_list[1].vectorID,
    addition_allowed: true,
    addedVectors: false,
    taskScreen: true,
    delete_allowed: false,
    addition_resolution_allowed: false,
    addition_change_mode_allowed: false
  })
  appendmarker(screens_list[1].vectorID);
  screens_list[1].vector_list.push(temp_vector);

  /*************************** Task 2_2 ***************************/

  screens_list[2].vectorID = -1;

  function task_2_2_canvas(event){
    if(event.touches.length == 2){
      touch_1 = event.touches[0];
      touch_2 = event.touches[1];
      if(touch_1.target.nodeName == "svg" && touch_2.target.nodeName == "svg"){
        screens_list[2].vectorID++;
        var temp_vector = new createVector({
          parent: screens_list[2],
          cx: touch_1.pageX,
          cy: touch_1.pageY,
          r: distpoints(touch_1.pageX, touch_1.pageY, touch_2.pageX, touch_2.pageY),
          manipulationPossible: true,
          angle_rad: Math.atan2(-(touch_2.pageY-touch_1.pageY), (touch_2.pageX-touch_1.pageX)),
          manipulables: { r: true, angle: true, xComponent: true, yComponent: true },
          resolution_allowed: false,
          movementAllowed: true,
          vector_mode: "polar",               // "cartesian", "polar"
          cartesian_mode_controls: "polar",   // "cartesian", "polar"
          vectorID: screens_list[2].vectorID,
          addition_allowed: true,
          addedVectors: false,
          taskScreen: true,
          delete_allowed: true,
          screen_data: screens_list[2],
          addition_resolution_allowed: false,
          addition_change_mode_allowed: false
        })
        appendmarker(screens_list[2].vectorID);
        screens_list[2].vector_list.push(temp_vector);
      }
    }
  }

  /*************************** Task 2_3 ***************************/

  screens_list[3].vectorID = -1;

  function task_2_3_canvas(event){
    if(event.touches.length == 2){
      touch_1 = event.touches[0];
      touch_2 = event.touches[1];
      if(touch_1.target.nodeName == "svg" && touch_2.target.nodeName == "svg"){
        screens_list[3].vectorID++;
        var temp_vector = new createVector({
          parent: screens_list[3],
          cx: touch_1.pageX,
          cy: touch_1.pageY,
          r: distpoints(touch_1.pageX, touch_1.pageY, touch_2.pageX, touch_2.pageY),
          manipulationPossible: true,
          angle_rad: Math.atan2(-(touch_2.pageY-touch_1.pageY), (touch_2.pageX-touch_1.pageX)),
          manipulables: { r: true, angle: true, xComponent: true, yComponent: true },
          resolution_allowed: false,
          movementAllowed: true,
          vector_mode: "polar",               // "cartesian", "polar"
          cartesian_mode_controls: "polar",   // "cartesian", "polar"
          vectorID: screens_list[3].vectorID,
          addition_allowed: true,
          addedVectors: false,
          taskScreen: true,
          delete_allowed: true,
          screen_data: screens_list[3],
          addition_resolution_allowed: false,
          addition_change_mode_allowed: false
        })
        appendmarker(screens_list[3].vectorID);
        screens_list[3].vector_list.push(temp_vector);
      }
    }
  }

  /*************************** Task 2_4 ***************************/

  screens_list[4].vectorID = -1;

  function task_2_4_canvas(event){
    if(event.touches.length == 2){
      touch_1 = event.touches[0];
      touch_2 = event.touches[1];
      if(touch_1.target.nodeName == "svg" && touch_2.target.nodeName == "svg"){
        screens_list[4].vectorID++;
        var temp_vector = new createVector({
          parent: screens_list[4],
          cx: touch_1.pageX,
          cy: touch_1.pageY,
          r: distpoints(touch_1.pageX, touch_1.pageY, touch_2.pageX, touch_2.pageY),
          manipulationPossible: true,
          angle_rad: Math.atan2(-(touch_2.pageY-touch_1.pageY), (touch_2.pageX-touch_1.pageX)),
          manipulables: { r: true, angle: true, xComponent: true, yComponent: true },
          resolution_allowed: false,
          movementAllowed: true,
          vector_mode: "polar",               // "cartesian", "polar"
          cartesian_mode_controls: "polar",   // "cartesian", "polar"
          vectorID: screens_list[4].vectorID,
          addition_allowed: true,
          addedVectors: false,
          taskScreen: true,
          delete_allowed: true,
          screen_data: screens_list[4],
          addition_resolution_allowed: false,
          addition_change_mode_allowed: false
        })
        appendmarker(screens_list[4].vectorID);
        screens_list[4].vector_list.push(temp_vector);
      }
    }
  }

  /*************************** Task 2_5 ***************************/

  screens_list[5].vectorID = -1;

  function task_2_5_canvas(event){
    if(event.touches.length == 2){
      touch_1 = event.touches[0];
      touch_2 = event.touches[1];
      if(touch_1.target.nodeName == "svg" && touch_2.target.nodeName == "svg"){
        screens_list[5].vectorID++;
        var temp_vector = new createVector({
          parent: screens_list[5],
          cx: touch_1.pageX,
          cy: touch_1.pageY,
          r: distpoints(touch_1.pageX, touch_1.pageY, touch_2.pageX, touch_2.pageY),
          manipulationPossible: true,
          angle_rad: Math.atan2(-(touch_2.pageY-touch_1.pageY), (touch_2.pageX-touch_1.pageX)),
          manipulables: { r: true, angle: true, xComponent: true, yComponent: true },
          resolution_allowed: false,
          movementAllowed: true,
          vector_mode: "polar",               // "cartesian", "polar"
          cartesian_mode_controls: "polar",   // "cartesian", "polar"
          vectorID: screens_list[5].vectorID,
          addition_allowed: true,
          addedVectors: false,
          taskScreen: true,
          delete_allowed: true,
          screen_data: screens_list[5],
          addition_resolution_allowed: true,
          addition_change_mode_allowed: true
        })
        appendmarker(screens_list[5].vectorID);
        screens_list[5].vector_list.push(temp_vector);
      }
    }
  }

/*************************** Parent SVG ***************************/

  parent_svg.on("touchstart", function(){
    if(currentScreen_count == 2){
      task_2_2_canvas(d3.event);
    }
    if(currentScreen_count == 3){
      task_2_3_canvas(d3.event);
    }
    if(currentScreen_count == 4){
      task_2_4_canvas(d3.event);
    }
    if(currentScreen_count == 5){
      task_2_5_canvas(d3.event);
    }
  })

}
