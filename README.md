# Notification and risk quantification of Coronavirus exposure within Melbourne, Australia

## Summary
Notifies users (of this web application) that a new exposure site has been declared by Victorian Government, by automatically checking for COVID-19 exposure sites data, every few minutes, in Melbourne (Victoria, Australia) then self-updates web application if there are. 

Attempts to quantify exposure risk to users of the app by allowing these viewers to notify the app if they were at an exposure site during the exposure period, then assumes this data as a representative sample, data which is then used to approximately calculate this risk to each individual.

## Development
The web application will be attempted using JavaScript, with computation occuring solely within the client's browser. The _Vue_ [1] application framework will be used, integrating the _Google Maps Platform_ [2] to also display visual representation of the quantification of risk (to enhance human assessment). Viewers' notification to the app will be implemented also client-side. The computation will will involve Python if necessary.

## Interested?
I'm looking for mathematical people, as the quantification of risk will be challanging for me (I have a background in computational engineering -- essentially producing nice-looking images using primarily black-box code). I'm also searching for research peeps in the area of perhaps epidemiology with an interest in computational science (disease modelling [3]). Mostly we're looking for your subscription to Nature. Kidding! We'd be grateful for any expert advice.

## Licenses
The Vue Software is released under the [MIT License](https://github.com/vuejs/vue/blob/dev/LICENSE). This project's software (and documentation) is also distributed under the MIT License. This project's remaining written content (not limited to this respository) is released under the [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/). The Google Maps Platform is used by agreeing to [Google's own license](https://cloud.google.com/maps-platform/terms).

## Notes
[1] https://www.freecodecamp.org/news/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446/  
[2] https://developers.google.com/maps/documentation/javascript/overview  
[3] https://www.idmod.org/  