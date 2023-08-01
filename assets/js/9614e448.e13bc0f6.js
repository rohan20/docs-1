"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[259],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2,title:"iOS | Release a Code Push App",sidebar_label:"\ud83c\udf4e iOS",description:"Release a Code Push App to the Apple App Store"},o="Releasing a code push app to the Apple App Store",p={unversionedId:"guides/release/ios",id:"guides/release/ios",title:"iOS | Release a Code Push App",description:"Release a Code Push App to the Apple App Store",source:"@site/docs/guides/release/ios.md",sourceDirName:"guides/release",slug:"/guides/release/ios",permalink:"/guides/release/ios",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/guides/release/ios.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"iOS | Release a Code Push App",sidebar_label:"\ud83c\udf4e iOS",description:"Release a Code Push App to the Apple App Store"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 Android",permalink:"/guides/release/android"},next:{title:"\u2705 Continuous Integration",permalink:"/ci"}},s={},l=[{value:"Prequisites",id:"prequisites",level:2},{value:"Specify a development team in Xcode",id:"specify-a-development-team-in-xcode",level:3},{value:"Creating a release",id:"creating-a-release",level:2},{value:"Determine the release version",id:"determine-the-release-version",level:3},{value:"Create a release in App Store Connect",id:"create-a-release-in-app-store-connect",level:3},{value:"Update the version in <code>pubspec.yaml</code>",id:"update-the-version-in-pubspecyaml",level:3},{value:"Create a Shorebird release",id:"create-a-shorebird-release",level:3},{value:"Upload to the App Store",id:"upload-to-the-app-store",level:2},{value:"Submit the app for review",id:"submit-the-app-for-review",level:2},{value:"After the release is approved",id:"after-the-release-is-approved",level:2},{value:"Creating a patch",id:"creating-a-patch",level:2},{value:"Make code changes",id:"make-code-changes",level:3},{value:"Create a Shorebird patch",id:"create-a-shorebird-patch",level:3}],c={toc:l},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"releasing-a-code-push-app-to-the-apple-app-store"},"Releasing a code push app to the Apple App Store"),(0,n.kt)("p",null,"This guide walks through releasing a code push app to the Apple App Store and applying a patch to that release."),(0,n.kt)("p",null,"The app we will be releasing in this guide is Shorebird Clock, our demo code push app. (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/time_shift/"},"source"),")"),(0,n.kt)("h2",{id:"prequisites"},"Prequisites"),(0,n.kt)("p",null,"To follow along with this guide, you will need the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An existing Shorebird app. If you don't have one, you can create one by following the ",(0,n.kt)("a",{parentName:"li",href:"../code_push_quickstart/"},"code push quickstart")," guide."),(0,n.kt)("li",{parentName:"ol"},"Access to hardware running macOS. This is required to build iOS apps."),(0,n.kt)("li",{parentName:"ol"},"A valid Apple Developer account. This is required to release iOS apps."),(0,n.kt)("li",{parentName:"ol"},"An app in ",(0,n.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com/"},"App Store Connect"),". See the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app"},"official documentation")," for more information about how to create one."),(0,n.kt)("li",{parentName:"ol"},"An iOS Distribution certificate. You can create one at ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/account/resources/certificates/add"},"https://developer.apple.com/account/resources/certificates/add"),"."),(0,n.kt)("li",{parentName:"ol"},"An iOS App Store provisioning profile. See the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/help/account/manage-provisioning-profiles/create-an-app-store-provisioning-profile"},"official documentation")," for instructions on how to create one."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/transporter/id1450874784"},"Transporter app"),". We will be using this to upload our app to the App Store.")),(0,n.kt)("h3",{id:"specify-a-development-team-in-xcode"},"Specify a development team in Xcode"),(0,n.kt)("p",null,"To build an iOS app for distribution, we need to specify a development team in Xcode. Open ",(0,n.kt)("inlineCode",{parentName:"p"},"ios/Runner.xcworkspace")," in Xcode and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Runner")," target:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/786b1def-6198-4be0-90ac-d307e9b1a289",alt:"Xcode development team"})),(0,n.kt)("h2",{id:"creating-a-release"},"Creating a release"),(0,n.kt)("h3",{id:"determine-the-release-version"},"Determine the release version"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird releases list")," to see the current set of releases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u2446 shorebird releases list\n\ud83d\ude80 Releases (f2184ee6-9a85-498c-bfeb-114d638c462e)\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Version \u2502 Name \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1.0.3+1 \u2502 --   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,"This shows that the most recent release is ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.3+1"),". Our next version will be ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.4+1"),"."),(0,n.kt)("h3",{id:"create-a-release-in-app-store-connect"},"Create a release in App Store Connect"),(0,n.kt)("p",null,"Because the App Store does not include the build number (the ",(0,n.kt)("inlineCode",{parentName:"p"},"+1")," part of ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.4+1"),") in app versions, this will show up in the App Store as ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.4"),". Follow the instructions in the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/help/app-store-connect/update-your-app/create-a-new-version"},"official documentation")," to create a new version in App Store Connect."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/549a42ac-0202-4c72-a9a9-d0196a0308b6",alt:"App Store Connect version"})),(0,n.kt)("h3",{id:"update-the-version-in-pubspecyaml"},"Update the version in ",(0,n.kt)("inlineCode",{parentName:"h3"},"pubspec.yaml")),(0,n.kt)("p",null,"Update the version in ",(0,n.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.4+1"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"}," name: shorebird_clock\n description: A demo app for Shorebird\n- version: 1.0.3+1\n+ version: 1.0.4+1\n")),(0,n.kt)("h3",{id:"create-a-shorebird-release"},"Create a Shorebird release"),(0,n.kt)("p",null,"Create a Shorebird release by running the ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird release ios-alpha")," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ shorebird release ios-alpha\n[WARN] iOS support is in an alpha state. See https://docs.shorebird.dev/status#ios-alpha for more information.\n\u2713 Fetching apps (0.1s)\n\u2713 Building release (56.2s)\n\u2713 Getting release version (37ms)\n\u2713 Fetching releases (0.1s)\n\ud83d\ude80 Ready to create a new release!\n\ud83d\udcf1 App: time_shift (f2184ee6-9a85-498c-bfeb-114d638c462e)\n\ud83d\udce6 Release Version: 1.0.4+1\n\ud83d\udd79\ufe0f Platform: ios\n\nWould you like to continue? (y/N) Yes\n\u2713 Fetching Flutter revision (36ms)\n\u2713 Creating release (0.2s)\n\u2713 Creating artifacts (8.0s)\n\u2713 Updating release status (57ms)\n\n\u2705 Published Release!\n\nYour next step is to upload the ipa to App Store Connect.\nbuild/ios/ipa/time_shift.ipa\n\nTo upload to the App Store either:\n    1. Drag and drop the "build/ios/ipa/time_shift.ipa" bundle into the Apple Transporter macOS app (https://apps.apple.com/us/app/transporter/id1450874784)\n    2. Run xcrun altool --upload-app --type ios -f build/ios/ipa/time_shift.ipa --apiKey your_api_key --apiIssuer your_issuer_id.\n       See "man altool" for details about how to authenticate with the App Store Connect API key.\n')),(0,n.kt)("h2",{id:"upload-to-the-app-store"},"Upload to the App Store"),(0,n.kt)("p",null,"Open the Transporter app and drag the generated ",(0,n.kt)("inlineCode",{parentName:"p"},"ipa")," file into the app. This will upload the app to the App Store."),(0,n.kt)("p",null,'Once the upload has completed, you will see the new build under the "Delivered" header:'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/f4740937-d38e-44a7-adde-c0debc254337",alt:"Transport upload"})),(0,n.kt)("p",null,'After a short delay (usually a minute or two), you will see the build listed as "Processing" in App Store Connect:'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/a87cdb31-9f8d-4838-b21b-38a3dbf9dcd1",alt:"App Store Connect Processing"})),(0,n.kt)("p",null,"Once the app has finished processing, we can add it to our release:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/da2f1253-610b-4ee5-abb4-7c088da1631c",alt:"App Store Connect add build"})),(0,n.kt)("h2",{id:"submit-the-app-for-review"},"Submit the app for review"),(0,n.kt)("p",null,"When we attempt to submit the app for review, App Store Connect will list the issues we need to resolve before we can submit the app:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/576459e0-3212-4ead-8388-eabb3b01c68a",alt:"App Store Connect review issues"})),(0,n.kt)("h2",{id:"after-the-release-is-approved"},"After the release is approved"),(0,n.kt)("p",null,"Once the release has been approved, you will be able to download it from the App Store."),(0,n.kt)("h2",{id:"creating-a-patch"},"Creating a patch"),(0,n.kt)("p",null,"Patches can be pushed to fix bugs in the ",(0,n.kt)("inlineCode",{parentName:"p"},"App Store")," release without requiring a new submission to the App Store."),(0,n.kt)("h3",{id:"make-code-changes"},"Make code changes"),(0,n.kt)("p",null,"For the purposes of this guide, we will change the default clock face to ",(0,n.kt)("inlineCode",{parentName:"p"},"generative")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/main.dart"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"},"     (clock) => clock.name == clockName,\n-    orElse: () => ClockFace.particle,\n+    orElse: () => ClockFace.generative,\n   );\n")),(0,n.kt)("h3",{id:"create-a-shorebird-patch"},"Create a Shorebird patch"),(0,n.kt)("p",null,"To make this patch available to your users, run ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird patch ios-alpha"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ shorebird patch ios-alpha\n[WARN] iOS support is in an alpha state. See https://docs.shorebird.dev/status#ios-alpha for more information.\n\u2713 Fetching apps (0.4s)\n\u2713 Building release (61.5s)\n\u2713 Detected release version 1.0.4+1 (44ms)\n\u2713 Fetching releases (0.1s)\n\u2713 Fetching Flutter revision (23ms)\n\n\ud83d\ude80 Ready to publish a new patch!\n\n\ud83d\udcf1 App: time_shift (f2184ee6-9a85-498c-bfeb-114d638c462e)\n\ud83d\udce6 Release Version: 1.0.4+1\n\ud83d\udcfa Channel: stable\n\ud83d\udd79\ufe0f Platform: ios [aarch64 (4.17 MB)]\n\nWould you like to continue? (y/N) Yes\n\u2713 Creating patch (72ms)\n\u2713 Uploading artifacts (0.5s)\n\u2713 Fetching channels (58ms)\n\u2713 Promoting patch to stable (61ms)\n\n\u2705 Published Patch!\n")))}h.isMDXComponent=!0}}]);