$(document).ready(function(){

    console.log ("It works");


$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Agility and Project Outcomes'
        },
        subtitle: {
            text: 'Source: PMI Pulse of the Profession, February 2015'
        },
        xAxis: {
            categories: [
                'Met Original Goals/Business Intent',
                'Finished on Time',
                'Finished within Budget'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage of Projects (%)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Organizations with High Agility',
            data: [75, 65, 67]

        },   {
            name: 'Organizations with Low Agility',
            data: [56, 40, 45]

        }]
    });
});
    
  var lineDuration = 1300;
  
  $('#line-one').velocity(
    {width: '1115px'},
    {
      duration: lineDuration,
      complete: doLineTwo
    }
  );
  
  function doLineTwo(){
    $("#line-two").velocity(
      {height: '260px'},
      {
        duration: lineDuration,
        complete: doLineThree
      }
    )
  }
  
    function doLineThree(){
    $("#line-three").velocity(
      {width: '200px'},
      {
        duration: lineDuration,
        complete: doLineThreeDrop
      }
    )
  }
  
      function doLineThreeDrop(){
    $("#line-three-drop").velocity(
      {height: '75px'},
      {
        duration: lineDuration,
        complete: showImage1
      }
    )
  }

    function showImage1(){
        $("#image1").fadeTo('slow', 1, doLineFour);
    }
  
      function doLineFour(){
    $("#line-four").velocity(
      {width: '200px'},
      {
        duration: lineDuration,
        complete: doLineFourDrop
      }
    )
  }
  
        function doLineFourDrop(){
    $("#line-four-drop").velocity(
      {height: '75px'},
      {
        duration: lineDuration,
        complete: showImage2
      }
    )
  }

      function showImage2(){
        $("#image2").fadeTo('slow', 1, doLineFive);
    }
  
        function doLineFive(){
    $("#line-five").velocity(
      {width: '200px'},
      {
        duration: lineDuration,
        complete: doLineFiveDrop
      }
    )
  }
       function doLineFiveDrop(){
    $("#line-five-drop").velocity(
      {height: '75px'},
      {
        duration: lineDuration,
        complete: showImage3
      }
    )
  }

        function showImage3(){
        $("#image3").fadeTo('slow', 1, doLineSix);
    }

    function doLineSix(){
    $("#line-six").velocity(
      {width: '200px'},
      {
        duration: lineDuration,
        complete: doLineSixDrop
      }
    )
  }
       function doLineSixDrop(){
    $("#line-six-drop").velocity(
      {height: '75px'},
      {
        duration: lineDuration,
        complete: showImage4
      }
    )
  }
          function showImage4(){
        $("#image4").fadeTo('slow', 1, doLineSeven);
    }

        function doLineSeven(){
    $("#line-seven").velocity(
      {width: '200px'},
      {
        duration: lineDuration,
        complete: doLineSevenDrop
      }
    )
  }
       function doLineSevenDrop(){
    $("#line-seven-drop").velocity(
      {height: '75px'},
      {
        duration: lineDuration,
        complete: showImage5
      }
    )
  }

    function showImage5(){
        $("#image5").fadeTo('slow', 1, doLineEight);
    }

    function doLineEight(){
    $("#line-eight").velocity(
      {width: '60px'},
      {
        duration: lineDuration,
        complete: doLineEightDrop
      }
    )
  }
    function doLineEightDrop(){
    $("#line-eight-drop").velocity(
      {height: '280px'},
      {
        duration: lineDuration,
        complete: doLineNine
      }
    )
  }

    function doLineNine(){
    $("#line-nine").velocity(
      {width: '915px'},
          {
            duration: lineDuration,
            complete: doLineTen
          }
        )
    }

     function doLineTen(){
    $("#line-ten").velocity(
      {height: '75px'},
          {
            duration: lineDuration,
            complete: showImage6
          }
        )
    }
    function showImage6(){
        $("#image6").fadeTo('slow', 1);
    }
});