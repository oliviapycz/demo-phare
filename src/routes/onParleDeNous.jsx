import  React from 'react';
 
function OnParleDeNous() {
  return (
    <div>
      <h1>on parle de nous</h1>
      <h2>voici tous les articles qui parle de nous avec plein d'images:</h2>
      <ul>
        <li>
          <article className="onparledenous-article">
            <img src="Outils.jpg"/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  Lorem Ipsum.</p>
          </article>
        </li>

        <li>
          <article className="onparledenous-article">
            <img src="Rouages.jpg"/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  Lorem Ipsum.</p>
          </article>
        </li>

        <li>
          <article className="onparledenous-article">
            <img src="Satisfaction.jpg"/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  Lorem Ipsum.</p>
          </article>
        </li>
      </ul>
    </div>
  )
}
export default OnParleDeNous