var Encoder = require('node-html-encoder').Encoder;
var encoder = new Encoder('entity');
function convert(str) {
  return str.replaceAll('"', "'").replaceAll("[\\n\\t ]", "");;
}
// {
//   name:,
//   dates:,
//   explanation:,
//   usedSkills:[{
//     name:,
//     icon:,
//   },],
//   relatedLink:[
//     {
//       linkIcon:,
//       linkName:,
//       link:,
//     }
//   ],
//   media:[{
//     isVid:,
//     driveID:,
//   }]
// }
module.exports = [
  {
    name:"Tuskbuddy Exchange",
    dates:"",
    explanation: `Designed a website that would sort and render the submissions of all Tuskbuddy Exchange contributors through file name conventions. Worked closely with the customer to make sure the website stayed close to his original design by having weekly updates. Interacted with both frontend and backend tools in order to finish this website.`,
    usedSkills:[
      {
        name:"Javascript",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g id="_652581_code_command_develop_javascript_language_icon" data-name="652581_code_command_develop_javascript_language_icon" transform="translate(-14 -14)">
        <g id="Group_81" data-name="Group 81">
          <g id="Group_80" data-name="Group 80">
            <circle id="Ellipse_11" data-name="Ellipse 11" cx="50" cy="50" r="50" transform="translate(14 14)" fill="#f0db4f"/>
          </g>
        </g>
        <g id="Layer_1_1_">
          <g id="Group_83" data-name="Group 83">
            <g id="Group_82" data-name="Group 82">
              <path id="Path_40" data-name="Path 40" d="M48.4,44.6h8.7V69.1c0,11-5.3,14.9-13.7,14.9a21.519,21.519,0,0,1-6.4-.9L38,76a14.659,14.659,0,0,0,4.5.7c3.7,0,6-1.7,6-7.6l-.1-24.5Z" fill="#323330"/>
              <path id="Path_41" data-name="Path 41" d="M64.8,74.4a22.314,22.314,0,0,0,9.7,2.4c4,0,6.1-1.7,6.1-4.3,0-2.4-1.8-3.8-6.5-5.4-6.4-2.3-10.7-5.9-10.7-11.6C63.4,49,69,44,78.1,44A22.625,22.625,0,0,1,88,46l-2,7a18.82,18.82,0,0,0-8-1.8c-3.8,0-5.6,1.8-5.6,3.7,0,2.5,2.1,3.6,7.2,5.5,6.8,2.5,10,6.1,10,11.6,0,6.5-4.9,12-15.6,12a25.65,25.65,0,0,1-11-2.4Z" fill="#323330"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
    `,
      },
      {
        name:"PHP",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 43.11">
      <g id="comp_x5F_256-php" transform="translate(-16.001 -125.035)">
        <g id="Group_87" data-name="Group 87" transform="translate(16.001 125.035)">
          <g id="Group_86" data-name="Group 86" transform="translate(0 0)">
            <g id="Group_84" data-name="Group 84">
              <path id="Path_42" data-name="Path 42" d="M63.855,135.034c-20.9,0-37.854,8.907-37.854,19.909s16.952,19.909,37.854,19.909,37.854-8.908,37.854-19.909S84.758,135.034,63.855,135.034Z" transform="translate(-24.355 -133.388)" fill="#007aff"/>
              <path id="Path_43" data-name="Path 43" d="M55.5,168.145c-10.373,0-20.151-2.137-27.532-6.018C20.252,158.068,16,152.551,16,146.59s4.251-11.479,11.969-15.537c7.381-3.881,17.158-6.018,27.532-6.018s20.151,2.137,27.531,6.018C90.751,135.111,95,140.629,95,146.59s-4.25,11.479-11.968,15.537C75.652,166.007,65.874,168.145,55.5,168.145Zm0-39.818c-9.849,0-19.083,2-26,5.64-6.583,3.461-10.209,7.944-10.209,12.623s3.625,9.162,10.209,12.623c6.917,3.637,16.15,5.64,26,5.64s19.083-2,26-5.64c6.583-3.462,10.208-7.945,10.208-12.623s-3.625-9.162-10.208-12.623C74.584,130.329,65.35,128.327,55.5,128.327Z" transform="translate(-16.001 -125.035)" fill="#005cbf"/>
            </g>
            <g id="Group_85" data-name="Group 85" transform="translate(13.041 7.401)">
              <path id="Path_44" data-name="Path 44" d="M109.529,182.515c-.934,4.791-4.235,4.294-8.292,4.294l1.621-8.352c4.5,0,7.547-.485,6.672,4.058Zm-14.29,12.752H99.58l1.029-5.3c4.862,0,7.878.355,10.67-2.259,3.087-2.839,3.892-7.89,1.692-10.422-1.147-1.325-2.993-1.976-5.5-1.976H99.107ZM117.206,170h4.318l-1.029,5.3c3.726,0,7.18-.272,8.849,1.266,1.751,1.609.911,3.667-.982,13.379h-4.377c1.822-9.392,2.165-10.173,1.5-10.883-.639-.686-2.094-.544-5.607-.544l-2.224,11.427h-4.318L117.206,170Zm26.25,12.515c-.947,4.862-4.342,4.294-8.293,4.294l1.621-8.352C141.3,178.458,144.331,177.973,143.456,182.515Zm-14.29,12.752h4.353l1.029-5.3c5.11,0,7.937.3,10.67-2.259,3.087-2.839,3.892-7.89,1.692-10.422-1.148-1.325-2.993-1.976-5.5-1.976h-8.363Z" transform="translate(-95.239 -170)" fill="#fff"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
    `,
      },
      {
        name:"HTML",
        icon:`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 28.002 32"">
                              <g id="_317755_badge_html_html5_achievement_award_icon" data-name="317755_badge_html_html5_achievement_award_icon" transform="translate(-2)">
                                <path id="Path_11" data-name="Path 11" d="M27.377,28.889,16,32,4.625,28.889,2,0H30Z" fill="#e44d26"/>
                                <path id="Path_12" data-name="Path 12" d="M16,2V29.75l9.232-2.742L27.688,2Z" fill="#ff6c39"/>
                                <path id="Path_13" data-name="Path 13" d="M24.363,6H7.607L8,10l.619,7H19.5l-.355,3.984L16,21.99l-3.143-1.006L12.648,19H8.8l.459,4.987,6.738,2,6.728-2L23.718,13H12.252L12,10H24Z" fill="#fff"/>
                              </g>
              </svg>`,
      },
      {
        name:"CSS",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.002 32">
      <g id="_317756_badge_css_css3_achievement_award_icon" data-name="317756_badge_css_css3_achievement_award_icon" transform="translate(-2)">
        <path id="Path_37" data-name="Path 37" d="M27.377,28.889,16,32,4.625,28.889,2,0H30Z" fill="#1f62ae"/>
        <path id="Path_38" data-name="Path 38" d="M16,2V29.75l9.232-2.742L27.688,2Z" fill="#347dc6"/>
        <path id="Path_39" data-name="Path 39" d="M24.363,6H7.607L8,10h8L8.25,12.99,8.619,17H19.5l-.344,4L16,21.99l-3.139-1.006L12.533,19H8.8l.459,4.987,6.738,2,6.728-2,.991-11H16.026L24,10Z" fill="#fff"/>
      </g>
    </svg>`
    ,
      },
    ],
    relatedLink:[
      {
        linkIcon:encoder.htmlEncode(`<svg id="_394187_github_icon" data-name="394187_github_icon" xmlns="http://www.w3.org/2000/svg" width="54" height="52.667" viewBox="0 0 54 52.667">
                    <path id="Path_20" data-name="Path 20" d="M-1132.29,1662.92a27,27,0,0,0-27,27,27.007,27.007,0,0,0,18.464,25.62c1.349.25,1.845-.586,1.845-1.3,0-.644-.025-2.771-.037-5.027-7.511,1.634-9.1-3.186-9.1-3.186-1.228-3.121-3-3.951-3-3.951-2.45-1.676.185-1.641.185-1.641a5.675,5.675,0,0,1,4.139,2.783c2.408,4.127,6.316,2.934,7.857,2.244a5.75,5.75,0,0,1,1.714-3.61c-6-.682-12.3-3-12.3-13.344a10.449,10.449,0,0,1,2.782-7.247,9.7,9.7,0,0,1,.262-7.146s2.267-.725,7.427,2.768a25.886,25.886,0,0,1,6.758-.909,25.95,25.95,0,0,1,6.764.909c5.154-3.493,7.418-2.768,7.418-2.768a9.691,9.691,0,0,1,.265,7.146,10.428,10.428,0,0,1,2.779,7.247c0,10.371-6.316,12.654-12.329,13.322a6.454,6.454,0,0,1,1.831,5c0,3.613-.031,6.52-.031,7.41,0,.719.486,1.561,1.854,1.3a27,27,0,0,0,18.449-25.617A27,27,0,0,0-1132.29,1662.92Z" transform="translate(1159.29 -1662.92)" fill-rule="evenodd"/>
                    <path id="Path_21" data-name="Path 21" d="M-1149.96,1698.28c-.054.123-.247.159-.422.075s-.279-.247-.221-.37.246-.161.424-.077.279.252.219.372Zm-.3-.23" transform="translate(1159.29 -1659.52)"/>
                    <path id="Path_22" data-name="Path 22" d="M-1148.96,1699.39c-.117.109-.347.058-.5-.114a.376.376,0,0,1-.072-.512c.121-.109.344-.058.505.114a.376.376,0,0,1,.07.512Zm-.24-.25" transform="translate(1160.236 -1659.422)"/>
                    <path id="Path_23" data-name="Path 23" d="M-1147.99,1700.81c-.151.105-.4.007-.551-.212s-.151-.482,0-.587.4-.01.551.207a.444.444,0,0,1,0,.593Zm0,0" transform="translate(1160.33 -1659.288)"/>
                    <path id="Path_24" data-name="Path 24" d="M-1146.66,1702.18c-.135.149-.423.109-.633-.094a.474.474,0,0,1-.14-.629c.137-.149.426-.107.638.094s.275.479.135.629Zm0,0" transform="translate(1160.446 -1658.297)"/>
                    <path id="Path_25" data-name="Path 25" d="M-1144.83,1702.98c-.06.193-.337.28-.615.2s-.461-.31-.4-.505.336-.286.617-.2.463.3.4.5Zm0,0" transform="translate(1160.61 -1658.297)"/>
                    <path id="Path_26" data-name="Path 26" d="M-1142.81,1703.12c.007.2-.23.372-.523.375s-.533-.158-.536-.358.231-.372.526-.377.533.159.533.359Zm0,0" transform="translate(1160.807 -1658.297)"/>
                    <path id="Path_27" data-name="Path 27" d="M-1140.94,1702.81c.035.2-.169.4-.459.456s-.55-.07-.587-.266.172-.407.457-.459.559.06.589.27Zm0,0" transform="translate(1160.991 -1658.297)"/>
                  </svg>`),
        linkName: "PHP version of website",
        link:"https://github.com/HakimMalikOttey/Tuskbuddy_Exchange_PHP_Version"
      },
    ],
    //https://drive.google.com/uc?id=
    //https://drive.google.com/thumbnail?id=
    media:[
      {
        isVid:true,
        driveID:"1OsStqOQXvGPZaN_-cHAwfrAakuQwL5WZ"
      },
      {
        isVid:false,
        driveID:"1K4vLzI9ue2-A4jMQ3QC_cfk7DPnVMZht"
      },
      {
        isVid:false,
        driveID:"1wKwwwGXVbHZ_L2g05S065VWrb7r704Oi"
      },
      {
        isVid:false,
        driveID:"1KlbMWyxyd-ec6YunbmdQDya8N27OabY3"
      }
    ]
  },
  {
    name:"Adaptchar",
    dates:"01/2018 -04/2020",
    explanation:"Created an Artificial Intelligence that would give NPCS in role-playing games the ability to change their behavior to better suit the players playstyle. Data from what attacks a player used will be converted into data that the NPC's can use to make educated decisions.",
    usedSkills:[{
      name:"Python",
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 454.109 456.64">
    <g id="_x32_67-python" transform="translate(-28.946 -27.681)">
      <g id="Group_89" data-name="Group 89">
        <path id="Path_56" data-name="Path 56" d="M194.005,240.252H299.059c29.216,0,52.529-24.1,52.529-53.414V86.6c0-28.525-24-49.871-52.529-54.691-35.214-5.8-73.478-5.509-105.054.1-44.462,7.87-52.527,24.3-52.527,54.693v21.453H246.63v31.959h-144.6c-30.591,0-57.349,18.394-65.709,53.315-9.64,40.035-10.033,65.02,0,106.826C43.8,331.34,61.6,353.569,92.2,353.569h36.1v-48c0-34.723,30-65.316,65.708-65.316Z" fill="#347ab4"/>
        <path id="Path_57" data-name="Path 57" d="M474.975,209.372c-7.575-30.4-21.935-53.315-52.527-53.315H383.005v46.626c0,36.2-30.692,66.691-65.71,66.691H212.24c-28.724,0-52.528,24.594-52.528,53.414V422.926c0,28.524,24.788,45.246,52.528,53.413,33.247,9.737,65.215,11.509,105.054,0,26.462-7.675,52.529-23.116,52.529-53.413v-21H264.867V369.512h157.58c30.593,0,41.9-21.346,52.527-53.314,11.018-32.954,10.527-64.628,0-106.826Z" fill="#ffca1d"/>
        <path id="Path_58" data-name="Path 58" d="M187.415,89.594A19.213,19.213,0,1,1,206.391,70.43,19.078,19.078,0,0,1,187.415,89.594Z" fill="#fff"/>
        <path id="Path_59" data-name="Path 59" d="M314.908,460.076a19.213,19.213,0,1,1,18.976-19.164A19.078,19.078,0,0,1,314.908,460.076Z" fill="#fff"/>
      </g>
    </g>
  </svg>
  `,
    },
    {
      name:"C#",
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.582 287.252">
    <g id="csharp" transform="translate(0 0)">
      <path id="Path_51" data-name="Path 51" d="M255.569,84.452a25.358,25.358,0,0,0-3.124-12.76,24.4,24.4,0,0,0-9.247-9.009Q192.16,33.255,141.1,3.866c-9.17-5.294-18.061-5.1-27.163.27C100.4,12.122,32.59,50.969,12.385,62.672,4.064,67.49.015,74.862.013,84.443Q-.006,143.626,0,202.808a25.452,25.452,0,0,0,2.988,12.517,24.317,24.317,0,0,0,9.386,9.254c20.206,11.7,88.02,50.547,101.56,58.536,9.106,5.373,18,5.565,27.17.27q51.022-29.46,102.105-58.818a24.326,24.326,0,0,0,9.386-9.252,25.488,25.488,0,0,0,2.987-12.518s0-78.889-.013-118.345" fill="#a179dc"/>
      <path id="Path_52" data-name="Path 52" d="M128.182,143.241,2.988,215.325a24.317,24.317,0,0,0,9.386,9.254c20.206,11.7,88.02,50.547,101.56,58.536,9.106,5.373,18,5.565,27.17.27q51.022-29.46,102.105-58.818a24.326,24.326,0,0,0,9.386-9.252Z" fill="#280068"/>
      <path id="Path_53" data-name="Path 53" d="M255.569,84.452a25.358,25.358,0,0,0-3.124-12.76l-124.263,71.55L252.6,215.315a25.51,25.51,0,0,0,2.987-12.518s0-78.889-.013-118.345" fill="#390091"/>
      <g id="Group_88" data-name="Group 88">
        <path id="Path_54" data-name="Path 54" d="M201.892,116.294v13.474h13.474V116.294H222.1v13.474h13.474v6.737H222.1v13.473h13.474v6.737H222.1v13.474h-6.737V156.715H201.892v13.474h-6.737V156.715H181.682v-6.737h13.473V136.505H181.682v-6.737h13.473V116.294Zm13.474,20.21H201.892v13.474h13.474Z" fill="#fff"/>
        <path id="Path_55" data-name="Path 55" d="M128.457,48.626a94.964,94.964,0,0,1,82.262,47.456l-.16-.273-41.35,23.808A47.279,47.279,0,0,0,129,96.323l-.54,0a47.306,47.306,0,1,0,41.222,70.5l-.2.345,41.287,23.918a94.969,94.969,0,0,1-81.253,47.536l-1.058.006a95,95,0,1,1,0-190Z" fill="#fff"/>
      </g>
    </g>
  </svg>
  `,
    },
    {
      name:"Unity",
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path id="_4691514_unity_unity_3d_logo_icon" data-name="4691514_unity_unity 3d_logo_icon" d="M19.9,19.2,15.6,12l4.3-7.2L22,12Zm-9.5-.7L5,13.2h8.6l4.3,7.2-7.5-1.9Zm0-13.1,7.5-1.9-4.3,7.2H4.9c0,.1,5.5-5.3,5.5-5.3ZM21.4,0,11.6,2.5,10.1,5H7.2L0,12l7.2,7h2.9l1.4,2.5L21.3,24l2.6-9.5L22.5,12,24,9.5,21.4,0Z"/>
</svg>
`,
    },
  ],
    relatedLink:[
      {
        linkIcon:encoder.htmlEncode(`<svg id="_394187_github_icon" data-name="394187_github_icon" xmlns="http://www.w3.org/2000/svg" width="54" height="52.667" viewBox="0 0 54 52.667">
                    <path id="Path_20" data-name="Path 20" d="M-1132.29,1662.92a27,27,0,0,0-27,27,27.007,27.007,0,0,0,18.464,25.62c1.349.25,1.845-.586,1.845-1.3,0-.644-.025-2.771-.037-5.027-7.511,1.634-9.1-3.186-9.1-3.186-1.228-3.121-3-3.951-3-3.951-2.45-1.676.185-1.641.185-1.641a5.675,5.675,0,0,1,4.139,2.783c2.408,4.127,6.316,2.934,7.857,2.244a5.75,5.75,0,0,1,1.714-3.61c-6-.682-12.3-3-12.3-13.344a10.449,10.449,0,0,1,2.782-7.247,9.7,9.7,0,0,1,.262-7.146s2.267-.725,7.427,2.768a25.886,25.886,0,0,1,6.758-.909,25.95,25.95,0,0,1,6.764.909c5.154-3.493,7.418-2.768,7.418-2.768a9.691,9.691,0,0,1,.265,7.146,10.428,10.428,0,0,1,2.779,7.247c0,10.371-6.316,12.654-12.329,13.322a6.454,6.454,0,0,1,1.831,5c0,3.613-.031,6.52-.031,7.41,0,.719.486,1.561,1.854,1.3a27,27,0,0,0,18.449-25.617A27,27,0,0,0-1132.29,1662.92Z" transform="translate(1159.29 -1662.92)" fill-rule="evenodd"/>
                    <path id="Path_21" data-name="Path 21" d="M-1149.96,1698.28c-.054.123-.247.159-.422.075s-.279-.247-.221-.37.246-.161.424-.077.279.252.219.372Zm-.3-.23" transform="translate(1159.29 -1659.52)"/>
                    <path id="Path_22" data-name="Path 22" d="M-1148.96,1699.39c-.117.109-.347.058-.5-.114a.376.376,0,0,1-.072-.512c.121-.109.344-.058.505.114a.376.376,0,0,1,.07.512Zm-.24-.25" transform="translate(1160.236 -1659.422)"/>
                    <path id="Path_23" data-name="Path 23" d="M-1147.99,1700.81c-.151.105-.4.007-.551-.212s-.151-.482,0-.587.4-.01.551.207a.444.444,0,0,1,0,.593Zm0,0" transform="translate(1160.33 -1659.288)"/>
                    <path id="Path_24" data-name="Path 24" d="M-1146.66,1702.18c-.135.149-.423.109-.633-.094a.474.474,0,0,1-.14-.629c.137-.149.426-.107.638.094s.275.479.135.629Zm0,0" transform="translate(1160.446 -1658.297)"/>
                    <path id="Path_25" data-name="Path 25" d="M-1144.83,1702.98c-.06.193-.337.28-.615.2s-.461-.31-.4-.505.336-.286.617-.2.463.3.4.5Zm0,0" transform="translate(1160.61 -1658.297)"/>
                    <path id="Path_26" data-name="Path 26" d="M-1142.81,1703.12c.007.2-.23.372-.523.375s-.533-.158-.536-.358.231-.372.526-.377.533.159.533.359Zm0,0" transform="translate(1160.807 -1658.297)"/>
                    <path id="Path_27" data-name="Path 27" d="M-1140.94,1702.81c.035.2-.169.4-.459.456s-.55-.07-.587-.266.172-.407.457-.459.559.06.589.27Zm0,0" transform="translate(1160.991 -1658.297)"/>
                  </svg>`),
        linkName: `Adaptchar Version 1 Source (old)`,
        link:`https://github.com/HakimMalikOttey/Adaptchar`,
      }
    ],
    media:[{
      isVid:true,
      driveID:`1FALl3iHSNl-CaGKJJaKiRKzIYimA-QrV`,
    },
    {
      isVid:false,
      driveID:`1s6q6R1DvpNn7_3IWV9DI9GLMcCf4i2OZ`,
    }
  ]
},
{
  name:`Project Techno`,
  dates:'09/2019 - 12/2019',
  explanation:"Acted as the co-lead and programmer for Project Techno. Worked on the implementing user experience, car controls, level swapping, and level collision for the game. Worked closely with a team of people from different backgronds in order to develop Project Techno.",
  usedSkills:[
    {
      name:"C#",
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.582 287.252">
    <g id="csharp" transform="translate(0 0)">
      <path id="Path_51" data-name="Path 51" d="M255.569,84.452a25.358,25.358,0,0,0-3.124-12.76,24.4,24.4,0,0,0-9.247-9.009Q192.16,33.255,141.1,3.866c-9.17-5.294-18.061-5.1-27.163.27C100.4,12.122,32.59,50.969,12.385,62.672,4.064,67.49.015,74.862.013,84.443Q-.006,143.626,0,202.808a25.452,25.452,0,0,0,2.988,12.517,24.317,24.317,0,0,0,9.386,9.254c20.206,11.7,88.02,50.547,101.56,58.536,9.106,5.373,18,5.565,27.17.27q51.022-29.46,102.105-58.818a24.326,24.326,0,0,0,9.386-9.252,25.488,25.488,0,0,0,2.987-12.518s0-78.889-.013-118.345" fill="#a179dc"/>
      <path id="Path_52" data-name="Path 52" d="M128.182,143.241,2.988,215.325a24.317,24.317,0,0,0,9.386,9.254c20.206,11.7,88.02,50.547,101.56,58.536,9.106,5.373,18,5.565,27.17.27q51.022-29.46,102.105-58.818a24.326,24.326,0,0,0,9.386-9.252Z" fill="#280068"/>
      <path id="Path_53" data-name="Path 53" d="M255.569,84.452a25.358,25.358,0,0,0-3.124-12.76l-124.263,71.55L252.6,215.315a25.51,25.51,0,0,0,2.987-12.518s0-78.889-.013-118.345" fill="#390091"/>
      <g id="Group_88" data-name="Group 88">
        <path id="Path_54" data-name="Path 54" d="M201.892,116.294v13.474h13.474V116.294H222.1v13.474h13.474v6.737H222.1v13.473h13.474v6.737H222.1v13.474h-6.737V156.715H201.892v13.474h-6.737V156.715H181.682v-6.737h13.473V136.505H181.682v-6.737h13.473V116.294Zm13.474,20.21H201.892v13.474h13.474Z" fill="#fff"/>
        <path id="Path_55" data-name="Path 55" d="M128.457,48.626a94.964,94.964,0,0,1,82.262,47.456l-.16-.273-41.35,23.808A47.279,47.279,0,0,0,129,96.323l-.54,0a47.306,47.306,0,1,0,41.222,70.5l-.2.345,41.287,23.918a94.969,94.969,0,0,1-81.253,47.536l-1.058.006a95,95,0,1,1,0-190Z" fill="#fff"/>
      </g>
    </g>
  </svg>
  `,
    },
    {
      name:"Unity",
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path id="_4691514_unity_unity_3d_logo_icon" data-name="4691514_unity_unity 3d_logo_icon" d="M19.9,19.2,15.6,12l4.3-7.2L22,12Zm-9.5-.7L5,13.2h8.6l4.3,7.2-7.5-1.9Zm0-13.1,7.5-1.9-4.3,7.2H4.9c0,.1,5.5-5.3,5.5-5.3ZM21.4,0,11.6,2.5,10.1,5H7.2L0,12l7.2,7h2.9l1.4,2.5L21.3,24l2.6-9.5L22.5,12,24,9.5,21.4,0Z"/>
</svg>
`,
    },
  ],
  relatedLink:[
    {
      linkIcon:encoder.htmlEncode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.99 24">
  <g id="_317714_video_youtube_icon" data-name="317714_video_youtube_icon" transform="translate(0 -4)">
    <path id="Path_35" data-name="Path 35" d="M31.67,9.179A7.692,7.692,0,0,0,30.4,5.79a4.413,4.413,0,0,0-3.2-1.443C22.717,4,16,4,16,4h-.015S9.272,4,4.8,4.347A4.415,4.415,0,0,0,1.591,5.79,7.705,7.705,0,0,0,.32,9.179,54.968,54.968,0,0,0,0,14.7v2.588a54.948,54.948,0,0,0,.32,5.523A7.676,7.676,0,0,0,1.591,26.2a5.231,5.231,0,0,0,3.527,1.459c2.559.262,10.877.343,10.877.343s6.722-.012,11.2-.355A4.432,4.432,0,0,0,30.4,26.2a7.69,7.69,0,0,0,1.271-3.386,54.974,54.974,0,0,0,.32-5.523V14.7A54.974,54.974,0,0,0,31.67,9.179Z" fill="#e02f2f"/>
    <path id="Path_36" data-name="Path 36" d="M12,10V22l10-6Z" fill="#fff"/>
  </g>
</svg>
`),
      linkName:`Project Techno Greenlight`,
      link:"https://youtu.be/qwXcaF87V0s",
    }
  ],
  media:[
    {
    isVid:true,
    driveID:"1RlEHo8flUnvXjlX-F7M9bTmc2P7j-0m8",
  },
  {
  isVid:false,
  driveID:"1kmu8sKImDKelGQvLivn2w0UiYRXUtAbj",
},
{
isVid:false,
driveID:"1MlLNr9dFswkETqV9HBKpxnjgoQGc7-dq",
},
{
isVid:false,
driveID:"1qaqruMBhxCthla3uUs1xz7lD5wcnHcAm",
},
{
isVid:false,
driveID:"11__hXivxRJAK4cSjzcT95TfEGFe8aKGo",
},
]
},
{
  name:"Spiderswarm",
  dates:"05/2019 - 12/2019",
  explanation:"Using Raspberry Pi, Python, and OpenCV, created object and contour recognition that would give the robot the ability to avoid obstacles. Interacted with GPIO motors in order to create specific instructions based on the information gathered from the contour recognition. Followed the SCRUM framework with a team of people from different technical backgrounds in order to work on this project. ",
  usedSkills:[{
    name:"Python",
    icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 454.109 456.64">
  <g id="_x32_67-python" transform="translate(-28.946 -27.681)">
    <g id="Group_89" data-name="Group 89">
      <path id="Path_56" data-name="Path 56" d="M194.005,240.252H299.059c29.216,0,52.529-24.1,52.529-53.414V86.6c0-28.525-24-49.871-52.529-54.691-35.214-5.8-73.478-5.509-105.054.1-44.462,7.87-52.527,24.3-52.527,54.693v21.453H246.63v31.959h-144.6c-30.591,0-57.349,18.394-65.709,53.315-9.64,40.035-10.033,65.02,0,106.826C43.8,331.34,61.6,353.569,92.2,353.569h36.1v-48c0-34.723,30-65.316,65.708-65.316Z" fill="#347ab4"/>
      <path id="Path_57" data-name="Path 57" d="M474.975,209.372c-7.575-30.4-21.935-53.315-52.527-53.315H383.005v46.626c0,36.2-30.692,66.691-65.71,66.691H212.24c-28.724,0-52.528,24.594-52.528,53.414V422.926c0,28.524,24.788,45.246,52.528,53.413,33.247,9.737,65.215,11.509,105.054,0,26.462-7.675,52.529-23.116,52.529-53.413v-21H264.867V369.512h157.58c30.593,0,41.9-21.346,52.527-53.314,11.018-32.954,10.527-64.628,0-106.826Z" fill="#ffca1d"/>
      <path id="Path_58" data-name="Path 58" d="M187.415,89.594A19.213,19.213,0,1,1,206.391,70.43,19.078,19.078,0,0,1,187.415,89.594Z" fill="#fff"/>
      <path id="Path_59" data-name="Path 59" d="M314.908,460.076a19.213,19.213,0,1,1,18.976-19.164A19.078,19.078,0,0,1,314.908,460.076Z" fill="#fff"/>
    </g>
  </g>
</svg>
`,
  }],
  relatedLink:[
    {
      linkIcon:encoder.htmlEncode(`<svg id="_394187_github_icon" data-name="394187_github_icon" xmlns="http://www.w3.org/2000/svg" width="54" height="52.667" viewBox="0 0 54 52.667">
                  <path id="Path_20" data-name="Path 20" d="M-1132.29,1662.92a27,27,0,0,0-27,27,27.007,27.007,0,0,0,18.464,25.62c1.349.25,1.845-.586,1.845-1.3,0-.644-.025-2.771-.037-5.027-7.511,1.634-9.1-3.186-9.1-3.186-1.228-3.121-3-3.951-3-3.951-2.45-1.676.185-1.641.185-1.641a5.675,5.675,0,0,1,4.139,2.783c2.408,4.127,6.316,2.934,7.857,2.244a5.75,5.75,0,0,1,1.714-3.61c-6-.682-12.3-3-12.3-13.344a10.449,10.449,0,0,1,2.782-7.247,9.7,9.7,0,0,1,.262-7.146s2.267-.725,7.427,2.768a25.886,25.886,0,0,1,6.758-.909,25.95,25.95,0,0,1,6.764.909c5.154-3.493,7.418-2.768,7.418-2.768a9.691,9.691,0,0,1,.265,7.146,10.428,10.428,0,0,1,2.779,7.247c0,10.371-6.316,12.654-12.329,13.322a6.454,6.454,0,0,1,1.831,5c0,3.613-.031,6.52-.031,7.41,0,.719.486,1.561,1.854,1.3a27,27,0,0,0,18.449-25.617A27,27,0,0,0-1132.29,1662.92Z" transform="translate(1159.29 -1662.92)" fill-rule="evenodd"/>
                  <path id="Path_21" data-name="Path 21" d="M-1149.96,1698.28c-.054.123-.247.159-.422.075s-.279-.247-.221-.37.246-.161.424-.077.279.252.219.372Zm-.3-.23" transform="translate(1159.29 -1659.52)"/>
                  <path id="Path_22" data-name="Path 22" d="M-1148.96,1699.39c-.117.109-.347.058-.5-.114a.376.376,0,0,1-.072-.512c.121-.109.344-.058.505.114a.376.376,0,0,1,.07.512Zm-.24-.25" transform="translate(1160.236 -1659.422)"/>
                  <path id="Path_23" data-name="Path 23" d="M-1147.99,1700.81c-.151.105-.4.007-.551-.212s-.151-.482,0-.587.4-.01.551.207a.444.444,0,0,1,0,.593Zm0,0" transform="translate(1160.33 -1659.288)"/>
                  <path id="Path_24" data-name="Path 24" d="M-1146.66,1702.18c-.135.149-.423.109-.633-.094a.474.474,0,0,1-.14-.629c.137-.149.426-.107.638.094s.275.479.135.629Zm0,0" transform="translate(1160.446 -1658.297)"/>
                  <path id="Path_25" data-name="Path 25" d="M-1144.83,1702.98c-.06.193-.337.28-.615.2s-.461-.31-.4-.505.336-.286.617-.2.463.3.4.5Zm0,0" transform="translate(1160.61 -1658.297)"/>
                  <path id="Path_26" data-name="Path 26" d="M-1142.81,1703.12c.007.2-.23.372-.523.375s-.533-.158-.536-.358.231-.372.526-.377.533.159.533.359Zm0,0" transform="translate(1160.807 -1658.297)"/>
                  <path id="Path_27" data-name="Path 27" d="M-1140.94,1702.81c.035.2-.169.4-.459.456s-.55-.07-.587-.266.172-.407.457-.459.559.06.589.27Zm0,0" transform="translate(1160.991 -1658.297)"/>
                </svg>`),
      linkName:"Spiderswarm source code",
      link:'https://github.com/HakimMalikOttey/open_AI',
    }
  ],
  media:[
    {
    isVid:true,
    driveID:"1gyX-XhQhVgKCQShS827nGSCfp4ffbSPv",
  },
  {
    isVid:true,
    driveID:"1oQTXdR4W01C4QT9R-XKYL4VVEuidnYar",
  }
]
},
{
  name:"Lost",
  dates:"",
  explanation:"Designed a game in Unity that tasks the player with finding a key item by using their light in order to lighten up dark rooms and access out of reach areas. Utilized Unity's lighting system with sprites in order to create the challenge of the game.",
  usedSkills:[    {
        name:"Unity",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path id="_4691514_unity_unity_3d_logo_icon" data-name="4691514_unity_unity 3d_logo_icon" d="M19.9,19.2,15.6,12l4.3-7.2L22,12Zm-9.5-.7L5,13.2h8.6l4.3,7.2-7.5-1.9Zm0-13.1,7.5-1.9-4.3,7.2H4.9c0,.1,5.5-5.3,5.5-5.3ZM21.4,0,11.6,2.5,10.1,5H7.2L0,12l7.2,7h2.9l1.4,2.5L21.3,24l2.6-9.5L22.5,12,24,9.5,21.4,0Z"/>
  </svg>
  `,
      },
      {
        name:"C#",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.582 287.252">
      <g id="csharp" transform="translate(0 0)">
        <path id="Path_51" data-name="Path 51" d="M255.569,84.452a25.358,25.358,0,0,0-3.124-12.76,24.4,24.4,0,0,0-9.247-9.009Q192.16,33.255,141.1,3.866c-9.17-5.294-18.061-5.1-27.163.27C100.4,12.122,32.59,50.969,12.385,62.672,4.064,67.49.015,74.862.013,84.443Q-.006,143.626,0,202.808a25.452,25.452,0,0,0,2.988,12.517,24.317,24.317,0,0,0,9.386,9.254c20.206,11.7,88.02,50.547,101.56,58.536,9.106,5.373,18,5.565,27.17.27q51.022-29.46,102.105-58.818a24.326,24.326,0,0,0,9.386-9.252,25.488,25.488,0,0,0,2.987-12.518s0-78.889-.013-118.345" fill="#a179dc"/>
        <path id="Path_52" data-name="Path 52" d="M128.182,143.241,2.988,215.325a24.317,24.317,0,0,0,9.386,9.254c20.206,11.7,88.02,50.547,101.56,58.536,9.106,5.373,18,5.565,27.17.27q51.022-29.46,102.105-58.818a24.326,24.326,0,0,0,9.386-9.252Z" fill="#280068"/>
        <path id="Path_53" data-name="Path 53" d="M255.569,84.452a25.358,25.358,0,0,0-3.124-12.76l-124.263,71.55L252.6,215.315a25.51,25.51,0,0,0,2.987-12.518s0-78.889-.013-118.345" fill="#390091"/>
        <g id="Group_88" data-name="Group 88">
          <path id="Path_54" data-name="Path 54" d="M201.892,116.294v13.474h13.474V116.294H222.1v13.474h13.474v6.737H222.1v13.473h13.474v6.737H222.1v13.474h-6.737V156.715H201.892v13.474h-6.737V156.715H181.682v-6.737h13.473V136.505H181.682v-6.737h13.473V116.294Zm13.474,20.21H201.892v13.474h13.474Z" fill="#fff"/>
          <path id="Path_55" data-name="Path 55" d="M128.457,48.626a94.964,94.964,0,0,1,82.262,47.456l-.16-.273-41.35,23.808A47.279,47.279,0,0,0,129,96.323l-.54,0a47.306,47.306,0,1,0,41.222,70.5l-.2.345,41.287,23.918a94.969,94.969,0,0,1-81.253,47.536l-1.058.006a95,95,0,1,1,0-190Z" fill="#fff"/>
        </g>
      </g>
    </svg>
    `,
      },],
  relatedLink:[
    {
      linkIcon:encoder.htmlEncode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28">
  <g id="_317713_drive_google_google_drive_icon" data-name="317713_drive_google_google drive_icon" transform="translate(0.038 -2)">
    <path id="Path_37" data-name="Path 37" d="M31.868,21h-22l-5,9H26.556" fill="#537abd"/>
    <path id="Path_38" data-name="Path 38" d="M10.962,2l-11,18,5,10L15.683,10.345" fill="#2eb672"/>
    <path id="Path_39" data-name="Path 39" d="M20.962,2h-10l10.75,19h10.25l-11-19" fill="#fed14b"/>
  </g>
</svg>
`),
      linkName:"Unity Build Download",
      link:"https://drive.google.com/file/d/1UXtopXBqK1Z6TMRe_FPw2ywx7Wt5_YH6/view?usp=sharing",
    },
    {
      linkIcon:encoder.htmlEncode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path id="_4691514_unity_unity_3d_logo_icon" data-name="4691514_unity_unity 3d_logo_icon" d="M19.9,19.2,15.6,12l4.3-7.2L22,12Zm-9.5-.7L5,13.2h8.6l4.3,7.2-7.5-1.9Zm0-13.1,7.5-1.9-4.3,7.2H4.9c0,.1,5.5-5.3,5.5-5.3ZM21.4,0,11.6,2.5,10.1,5H7.2L0,12l7.2,7h2.9l1.4,2.5L21.3,24l2.6-9.5L22.5,12,24,9.5,21.4,0Z"/>
</svg>
`),
      linkName:"Global Game Jam Page",
      link:"https://globalgamejam.org/2021/games/lost-6-0",
    }
  ],
  media:[
    {
    isVid:true,
    driveID:"14O9PMDaOsKRlsSv01Gpwk8EmUzrzvxkf",
  },
  {
  isVid:false,
  driveID:"1cdVIVQnOv4-fS8cC5pQjH7DfnxgYTDQl",
},
{
isVid:false,
driveID:"1VvnMOMnQUtXPxsdpbIfQbRqHZfrjXxSs",
},
]
}
]
