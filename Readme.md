# Template
 This is template consisting of basic app setup like navigation, jest, typescript, documentation, and airbnb eslint configuration


# Using this template
1. Clone the repo
2. Run command: react-native init TemplateTest --template file://<<path to file>>
3. If you get error while pod install because of flipper, open podfile and remove `enabling flipper` block.
4. Due to some issue masked view is not installed, so you have to install and link it by yourself. 
   
   `yarn add  @react-native-community/masked-view;`
   
 5. Remove eslintrc.js file because we will use eslintrc.json file for eslint configuration
 6. Also remove App.js file because we also have App.tsx file which we want to use.
