import React, { useState, useEffect } from 'react';
import {phone,keyfeatures} from './data';
import PhoneComponent from './phone';
import Keyfeature from './keyfeatures';

function App() {
 
  const [phones,setPhones] = useState(phone)
  return (
    <section className="section">
 <svg className="no-select" width="1001" height="1023" viewBox="0 0 1001 1023" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M316.451 881.977H0.5V438.699C0.5 229.749 170.493 59.7627 379.436 59.7627C383.202 59.7627 387.026 59.8191 390.853 59.9395C453.45 21.5683 527.648 0.500977 600.609 0.500977C821.11 0.500977 1000.5 179.892 1000.5 400.392V881.977H595.656L456.057 1021.58L316.451 881.977Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M325.757 859.509H22.9668V438.698C22.9668 242.14 182.878 82.229 379.436 82.229C385.202 82.229 391.051 82.3774 396.894 82.6598C457.237 44.1274 529.273 22.9673 600.609 22.9673C808.718 22.9673 978.026 192.282 978.026 400.392V859.509H586.351L456.059 989.802L325.757 859.509Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M335.067 837.043H45.4412V438.699C45.4412 254.526 195.27 104.697 379.436 104.697C387.215 104.697 395.099 104.979 402.963 105.537C461.01 66.7286 530.855 45.4399 600.609 45.4399C796.326 45.4399 955.559 204.666 955.559 400.39V837.043H577.047L456.057 958.025L335.067 837.043Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M344.372 814.568H67.908V438.7C67.908 266.919 207.662 127.171 379.436 127.171C389.264 127.171 399.197 127.644 409.073 128.591C464.756 89.4003 532.409 67.9082 600.609 67.9082C783.943 67.9082 933.092 217.059 933.092 400.391V814.568H567.744L456.059 926.253L344.372 814.568Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M353.677 792.102H90.3752V438.7C90.3752 279.312 220.048 149.639 379.436 149.639C391.406 149.643 403.364 150.388 415.242 151.87C468.825 112.002 533.819 90.4406 600.607 90.376C771.547 90.376 910.623 229.445 910.623 400.392V792.102H558.43L456.057 894.475L353.677 792.102Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M325.757 859.509H22.9668V438.698C22.9668 242.14 182.878 82.229 379.436 82.229C385.202 82.229 391.051 82.3774 396.894 82.6598C457.237 44.1274 529.273 22.9673 600.609 22.9673C808.718 22.9673 978.026 192.282 978.026 400.392V859.509H586.351L456.059 989.802L325.757 859.509Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M335.067 837.043H45.4412V438.699C45.4412 254.526 195.27 104.697 379.436 104.697C387.215 104.697 395.099 104.979 402.963 105.537C461.01 66.7286 530.855 45.4399 600.609 45.4399C796.326 45.4399 955.559 204.666 955.559 400.39V837.043H577.047L456.057 958.025L335.067 837.043Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M344.372 814.568H67.908V438.7C67.908 266.919 207.662 127.171 379.436 127.171C389.264 127.171 399.197 127.644 409.073 128.591C464.756 89.4003 532.409 67.9082 600.609 67.9082C783.943 67.9082 933.092 217.059 933.092 400.391V814.568H567.744L456.059 926.253L344.372 814.568Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M353.677 792.102H90.3752V438.7C90.3752 279.312 220.048 149.639 379.436 149.639C391.406 149.643 403.364 150.388 415.242 151.87C468.825 112.002 533.819 90.4406 600.607 90.376C771.547 90.376 910.623 229.445 910.623 400.392V792.102H558.43L456.057 894.475L353.677 792.102Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M362.988 769.635H112.849V438.699C112.849 291.696 232.44 172.105 379.436 172.105C393.512 172.112 407.565 173.227 421.466 175.44C472.369 134.891 535.529 112.821 600.609 112.843C759.164 112.843 888.151 241.837 888.151 400.394V769.637H549.127L456.057 862.703L362.988 769.635Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M335.067 837.043H45.4412V438.699C45.4412 254.526 195.27 104.697 379.436 104.697C387.215 104.697 395.099 104.979 402.963 105.537C461.01 66.7286 530.855 45.4399 600.609 45.4399C796.326 45.4399 955.559 204.666 955.559 400.39V837.043H577.047L456.057 958.025L335.067 837.043Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M344.372 814.568H67.908V438.7C67.908 266.919 207.662 127.171 379.436 127.171C389.264 127.171 399.197 127.644 409.073 128.591C464.756 89.4003 532.409 67.9082 600.609 67.9082C783.943 67.9082 933.092 217.059 933.092 400.391V814.568H567.744L456.059 926.253L344.372 814.568Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M353.677 792.102H90.3752V438.7C90.3752 279.312 220.048 149.639 379.436 149.639C391.406 149.643 403.364 150.388 415.242 151.87C468.825 112.002 533.819 90.4406 600.607 90.376C771.547 90.376 910.623 229.445 910.623 400.392V792.102H558.43L456.057 894.475L353.677 792.102Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M362.988 769.635H112.849V438.699C112.849 291.696 232.44 172.105 379.436 172.105C393.512 172.112 407.565 173.227 421.466 175.44C472.369 134.891 535.529 112.821 600.609 112.843C759.164 112.843 888.151 241.837 888.151 400.394V769.637H549.127L456.057 862.703L362.988 769.635Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M372.294 747.169H135.316V438.699C135.316 304.088 244.825 194.572 379.436 194.572C395.665 194.578 411.853 196.197 427.761 199.405C475.818 157.981 536.727 135.318 600.609 135.318C746.771 135.318 865.684 254.231 865.684 400.393V747.169H539.821L456.057 830.925L372.294 747.169Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M344.372 814.568H67.908V438.7C67.908 266.919 207.662 127.171 379.436 127.171C389.264 127.171 399.197 127.644 409.073 128.591C464.756 89.4003 532.409 67.9082 600.609 67.9082C783.943 67.9082 933.092 217.059 933.092 400.391V814.568H567.744L456.059 926.253L344.372 814.568Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M353.677 792.102H90.3752V438.7C90.3752 279.312 220.048 149.639 379.436 149.639C391.406 149.643 403.364 150.388 415.242 151.87C468.825 112.002 533.819 90.4406 600.607 90.376C771.547 90.376 910.623 229.445 910.623 400.392V792.102H558.43L456.057 894.475L353.677 792.102Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M362.988 769.635H112.849V438.699C112.849 291.696 232.44 172.105 379.436 172.105C393.512 172.112 407.565 173.227 421.466 175.44C472.369 134.891 535.529 112.821 600.609 112.843C759.164 112.843 888.151 241.837 888.151 400.394V769.637H549.127L456.057 862.703L362.988 769.635Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M372.294 747.169H135.316V438.699C135.316 304.088 244.825 194.572 379.436 194.572C395.665 194.578 411.853 196.197 427.761 199.405C475.818 157.981 536.727 135.318 600.609 135.318C746.771 135.318 865.684 254.231 865.684 400.393V747.169H539.821L456.057 830.925L372.294 747.169Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M381.598 724.694H157.783V438.699C157.783 316.48 257.217 217.046 379.436 217.046C397.889 217.048 416.271 219.348 434.155 223.892C479.358 181.205 538.189 157.782 600.609 157.782C734.386 157.782 843.217 266.612 843.217 400.39V724.692H530.509L456.057 799.154L381.598 724.694Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M353.677 792.102H90.3752V438.7C90.3752 279.312 220.048 149.639 379.436 149.639C391.406 149.643 403.364 150.388 415.242 151.87C468.825 112.002 533.819 90.4406 600.607 90.376C771.547 90.376 910.623 229.445 910.623 400.392V792.102H558.43L456.057 894.475L353.677 792.102Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M362.988 769.635H112.849V438.699C112.849 291.696 232.44 172.105 379.436 172.105C393.512 172.112 407.565 173.227 421.466 175.44C472.369 134.891 535.529 112.821 600.609 112.843C759.164 112.843 888.151 241.837 888.151 400.394V769.637H549.127L456.057 862.703L362.988 769.635Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M372.294 747.169H135.316V438.699C135.316 304.088 244.825 194.572 379.436 194.572C395.665 194.578 411.853 196.197 427.761 199.405C475.818 157.981 536.727 135.318 600.609 135.318C746.771 135.318 865.684 254.231 865.684 400.393V747.169H539.821L456.057 830.925L372.294 747.169Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M381.598 724.694H157.783V438.699C157.783 316.48 257.217 217.046 379.436 217.046C397.889 217.048 416.271 219.348 434.155 223.892C479.358 181.205 538.189 157.782 600.609 157.782C734.386 157.782 843.217 266.612 843.217 400.39V724.692H530.509L456.057 799.154L381.598 724.694Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M390.91 702.227H180.25V438.699C180.25 328.865 269.602 239.512 379.436 239.512C400.19 239.545 420.815 242.777 440.585 249.095L444.944 244.727C486.537 203.15 541.813 180.251 600.609 180.251C721.994 180.251 820.743 279.007 820.743 400.393V702.228H521.204L456.057 767.374L390.91 702.227Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M362.988 769.635H112.849V438.699C112.849 291.696 232.44 172.105 379.436 172.105C393.512 172.112 407.565 173.227 421.466 175.44C472.369 134.891 535.529 112.821 600.609 112.843C759.164 112.843 888.151 241.837 888.151 400.394V769.637H549.127L456.057 862.703L362.988 769.635Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M372.294 747.169H135.316V438.699C135.316 304.088 244.825 194.572 379.436 194.572C395.665 194.578 411.853 196.197 427.761 199.405C475.818 157.981 536.727 135.318 600.609 135.318C746.771 135.318 865.684 254.231 865.684 400.393V747.169H539.821L456.057 830.925L372.294 747.169Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M381.598 724.694H157.783V438.699C157.783 316.48 257.217 217.046 379.436 217.046C397.889 217.048 416.271 219.348 434.155 223.892C479.358 181.205 538.189 157.782 600.609 157.782C734.386 157.782 843.217 266.612 843.217 400.39V724.692H530.509L456.057 799.154L381.598 724.694Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M390.91 702.227H180.25V438.699C180.25 328.865 269.602 239.512 379.436 239.512C400.19 239.545 420.815 242.777 440.585 249.095L444.944 244.727C486.537 203.15 541.813 180.251 600.609 180.251C721.994 180.251 820.743 279.007 820.743 400.393V702.228H521.204L456.057 767.374L390.91 702.227Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M400.215 679.759H202.724V438.699C202.724 341.257 281.994 261.979 379.436 261.979C402.384 261.982 425.115 266.433 446.37 275.085L460.833 260.616C498.179 223.284 547.819 202.725 600.609 202.725C709.602 202.725 798.276 291.391 798.276 400.392V679.76H511.898L456.059 735.595L400.215 679.759Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M372.294 747.169H135.316V438.699C135.316 304.088 244.825 194.572 379.436 194.572C395.665 194.578 411.853 196.197 427.761 199.405C475.818 157.981 536.727 135.318 600.609 135.318C746.771 135.318 865.684 254.231 865.684 400.393V747.169H539.821L456.057 830.925L372.294 747.169Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M381.598 724.694H157.783V438.699C157.783 316.48 257.217 217.046 379.436 217.046C397.889 217.048 416.271 219.348 434.155 223.892C479.358 181.205 538.189 157.782 600.609 157.782C734.386 157.782 843.217 266.612 843.217 400.39V724.692H530.509L456.057 799.154L381.598 724.694Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M390.91 702.227H180.25V438.699C180.25 328.865 269.602 239.512 379.436 239.512C400.19 239.545 420.815 242.777 440.585 249.095L444.944 244.727C486.537 203.15 541.813 180.251 600.609 180.251C721.994 180.251 820.743 279.007 820.743 400.393V702.228H521.204L456.057 767.374L390.91 702.227Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M400.215 679.759H202.724V438.699C202.724 341.257 281.994 261.979 379.436 261.979C402.384 261.982 425.115 266.433 446.37 275.085L460.833 260.616C498.179 223.284 547.819 202.725 600.609 202.725C709.602 202.725 798.276 291.391 798.276 400.392V679.76H511.898L456.059 735.595L400.215 679.759Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M409.519 657.286H225.191V438.698C225.191 353.642 294.386 284.446 379.436 284.446C404.423 284.39 429.044 290.439 451.161 302.067L476.722 276.505C509.822 243.412 553.817 225.191 600.609 225.191C697.217 225.191 775.809 303.783 775.809 400.392V657.286H502.589L456.057 703.823L409.519 657.286Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M381.598 724.694H157.783V438.699C157.783 316.48 257.217 217.046 379.436 217.046C397.889 217.048 416.271 219.348 434.155 223.892C479.358 181.205 538.189 157.782 600.609 157.782C734.386 157.782 843.217 266.612 843.217 400.39V724.692H530.509L456.057 799.154L381.598 724.694Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M390.91 702.227H180.25V438.699C180.25 328.865 269.602 239.512 379.436 239.512C400.19 239.545 420.815 242.777 440.585 249.095L444.944 244.727C486.537 203.15 541.813 180.251 600.609 180.251C721.994 180.251 820.743 279.007 820.743 400.393V702.228H521.204L456.057 767.374L390.91 702.227Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M400.215 679.759H202.724V438.699C202.724 341.257 281.994 261.979 379.436 261.979C402.384 261.982 425.115 266.433 446.37 275.085L460.833 260.616C498.179 223.284 547.819 202.725 600.609 202.725C709.602 202.725 798.276 291.391 798.276 400.392V679.76H511.898L456.059 735.595L400.215 679.759Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M409.519 657.286H225.191V438.698C225.191 353.642 294.386 284.446 379.436 284.446C404.423 284.39 429.044 290.439 451.161 302.067L476.722 276.505C509.822 243.412 553.817 225.191 600.609 225.191C697.217 225.191 775.809 303.783 775.809 400.392V657.286H502.589L456.057 703.823L409.519 657.286Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M418.831 634.818H247.658V438.698C247.658 366.033 306.772 306.921 379.435 306.921C406.305 306.853 432.545 315.054 454.594 330.41L492.612 292.393C506.761 278.167 523.592 266.888 542.13 259.209C560.667 251.531 580.544 247.605 600.609 247.658C684.824 247.658 753.341 316.175 753.341 400.392V634.817H514.33V613.77L456.057 672.044L418.831 634.818Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M390.91 702.227H180.25V438.699C180.25 328.865 269.602 239.512 379.436 239.512C400.19 239.545 420.815 242.777 440.585 249.095L444.944 244.727C486.537 203.15 541.813 180.251 600.609 180.251C721.994 180.251 820.743 279.007 820.743 400.393V702.228H521.204L456.057 767.374L390.91 702.227Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M400.215 679.759H202.724V438.699C202.724 341.257 281.994 261.979 379.436 261.979C402.384 261.982 425.115 266.433 446.37 275.085L460.833 260.616C498.179 223.284 547.819 202.725 600.609 202.725C709.602 202.725 798.276 291.391 798.276 400.392V679.76H511.898L456.059 735.595L400.215 679.759Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M409.519 657.286H225.191V438.698C225.191 353.642 294.386 284.446 379.436 284.446C404.423 284.39 429.044 290.439 451.161 302.067L476.722 276.505C509.822 243.412 553.817 225.191 600.609 225.191C697.217 225.191 775.809 303.783 775.809 400.392V657.286H502.589L456.057 703.823L409.519 657.286Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M418.831 634.818H247.658V438.698C247.658 366.033 306.772 306.921 379.435 306.921C406.305 306.853 432.545 315.054 454.594 330.41L492.612 292.393C506.761 278.167 523.592 266.888 542.13 259.209C560.667 251.531 580.544 247.605 600.609 247.658C684.824 247.658 753.341 316.175 753.341 400.392V634.817H514.33V613.77L456.057 672.044L418.831 634.818Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M428.136 612.352H270.125V438.699C270.125 378.427 319.164 329.388 379.436 329.388C408.111 329.307 435.654 340.574 456.052 360.729L508.501 308.283C520.569 296.148 534.923 286.527 550.733 279.977C566.543 273.427 583.496 270.078 600.609 270.124C672.44 270.124 730.868 328.559 730.868 400.389V612.352H536.799V559.526L456.057 640.273L428.136 612.352Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M400.215 679.759H202.724V438.699C202.724 341.257 281.994 261.979 379.436 261.979C402.384 261.982 425.115 266.433 446.37 275.085L460.833 260.616C498.179 223.284 547.819 202.725 600.609 202.725C709.602 202.725 798.276 291.391 798.276 400.392V679.76H511.898L456.059 735.595L400.215 679.759Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M409.519 657.286H225.191V438.698C225.191 353.642 294.386 284.446 379.436 284.446C404.423 284.39 429.044 290.439 451.161 302.067L476.722 276.505C509.822 243.412 553.817 225.191 600.609 225.191C697.217 225.191 775.809 303.783 775.809 400.392V657.286H502.589L456.057 703.823L409.519 657.286Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M418.831 634.818H247.658V438.698C247.658 366.033 306.772 306.921 379.435 306.921C406.305 306.853 432.545 315.054 454.594 330.41L492.612 292.393C506.761 278.167 523.592 266.888 542.13 259.209C560.667 251.531 580.544 247.605 600.609 247.658C684.824 247.658 753.341 316.175 753.341 400.392V634.817H514.33V613.77L456.057 672.044L418.831 634.818Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M428.136 612.352H270.125V438.699C270.125 378.427 319.164 329.388 379.436 329.388C408.111 329.307 435.654 340.574 456.052 360.729L508.501 308.283C520.569 296.148 534.923 286.527 550.733 279.977C566.543 273.427 583.496 270.078 600.609 270.124C672.44 270.124 730.868 328.559 730.868 400.389V612.352H536.799V559.526L456.057 640.273L428.136 612.352Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M437.441 589.885H292.599V438.699C292.599 390.812 331.556 351.855 379.436 351.855C390.844 351.824 402.145 354.057 412.685 358.422C423.225 362.788 432.794 369.201 440.839 377.289L456.057 392.5L524.391 324.167C534.378 314.128 546.256 306.169 559.339 300.751C572.421 295.332 586.449 292.562 600.609 292.6C660.048 292.6 708.401 340.954 708.401 400.392V589.885H559.264V505.28L456.057 608.495L437.441 589.885Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M409.519 657.286H225.191V438.698C225.191 353.642 294.386 284.446 379.436 284.446C404.423 284.39 429.044 290.439 451.161 302.067L476.722 276.505C509.822 243.412 553.817 225.191 600.609 225.191C697.217 225.191 775.809 303.783 775.809 400.392V657.286H502.589L456.057 703.823L409.519 657.286Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M418.831 634.818H247.658V438.698C247.658 366.033 306.772 306.921 379.435 306.921C406.305 306.853 432.545 315.054 454.594 330.41L492.612 292.393C506.761 278.167 523.592 266.888 542.13 259.209C560.667 251.531 580.544 247.605 600.609 247.658C684.824 247.658 753.341 316.175 753.341 400.392V634.817H514.33V613.77L456.057 672.044L418.831 634.818Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M428.136 612.352H270.125V438.699C270.125 378.427 319.164 329.388 379.436 329.388C408.111 329.307 435.654 340.574 456.052 360.729L508.501 308.283C520.569 296.148 534.923 286.527 550.733 279.977C566.543 273.427 583.496 270.078 600.609 270.124C672.44 270.124 730.868 328.559 730.868 400.389V612.352H536.799V559.526L456.057 640.273L428.136 612.352Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M437.441 589.885H292.599V438.699C292.599 390.812 331.556 351.855 379.436 351.855C390.844 351.824 402.145 354.057 412.685 358.422C423.225 362.788 432.794 369.201 440.839 377.289L456.057 392.5L524.391 324.167C534.378 314.128 546.256 306.169 559.339 300.751C572.421 295.332 586.449 292.562 600.609 292.6C660.048 292.6 708.401 340.954 708.401 400.392V589.885H559.264V505.28L456.057 608.495L437.441 589.885Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M419.262 539.927V567.411H315.065V438.699C315.065 403.204 343.939 374.322 379.435 374.322C387.893 374.299 396.271 375.954 404.085 379.191C411.899 382.428 418.993 387.183 424.957 393.18L456.058 424.281L540.273 340.054C548.179 332.107 557.581 325.806 567.938 321.517C578.294 317.228 589.398 315.035 600.607 315.065C647.654 315.065 685.932 353.336 685.932 400.39V567.408H581.738V451.041L456.057 576.723L419.262 539.927Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M418.831 634.818H247.658V438.698C247.658 366.033 306.772 306.921 379.435 306.921C406.305 306.853 432.545 315.054 454.594 330.41L492.612 292.393C506.761 278.167 523.592 266.888 542.13 259.209C560.667 251.531 580.544 247.605 600.609 247.658C684.824 247.658 753.341 316.175 753.341 400.392V634.817H514.33V613.77L456.057 672.044L418.831 634.818Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M428.136 612.352H270.125V438.699C270.125 378.427 319.164 329.388 379.436 329.388C408.111 329.307 435.654 340.574 456.052 360.729L508.501 308.283C520.569 296.148 534.923 286.527 550.733 279.977C566.543 273.427 583.496 270.078 600.609 270.124C672.44 270.124 730.868 328.559 730.868 400.389V612.352H536.799V559.526L456.057 640.273L428.136 612.352Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M437.441 589.885H292.599V438.699C292.599 390.812 331.556 351.855 379.436 351.855C390.844 351.824 402.145 354.057 412.685 358.422C423.225 362.788 432.794 369.201 440.839 377.289L456.057 392.5L524.391 324.167C534.378 314.128 546.256 306.169 559.339 300.751C572.421 295.332 586.449 292.562 600.609 292.6C660.048 292.6 708.401 340.954 708.401 400.392V589.885H559.264V505.28L456.057 608.495L437.441 589.885Z" stroke="white" stroke-miterlimit="10"></path>
      <path d="M419.262 539.927V567.411H315.065V438.699C315.065 403.204 343.939 374.322 379.435 374.322C387.893 374.299 396.271 375.954 404.085 379.191C411.899 382.428 418.993 387.183 424.957 393.18L456.058 424.281L540.273 340.054C548.179 332.107 557.581 325.806 567.938 321.517C578.294 317.228 589.398 315.035 600.607 315.065C647.654 315.065 685.932 353.336 685.932 400.39V567.408H581.738V451.041L456.057 576.723L419.262 539.927Z" stroke="white" stroke-miterlimit="10"></path>
   </svg>
      <div className="section-center">
        <div className='sectionIntro'>
        <text>
          How it works?
        </text>
        
    <h2>
    Introducing MicDrop<br/>
    Offer Solutions
    </h2>
    </div>
<div className='phoneDiv'>
  
    {
    phones.map((mob,index)=>{
      return <PhoneComponent img={mob.img} text={mob.text} key = {index} eff={index+0.3}/>
      
    })}

</div>
      </div>

      <div className="feature-section">
      <h1>Key Features</h1>
      <div className='keyFeatures'>
        {keyfeatures.map((feautre,index) =>{
          return <Keyfeature heading={feautre.heading} discription= {feautre.discription}/>
        })}
      </div>
      </div>
      </section>
  );
}

export default App;
