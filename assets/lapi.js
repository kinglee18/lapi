
'use strict';

const LapiContactForm = () => {
  const { useState } = React;
  /*  <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
 <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script> */
  const [form, updateForm] = useState({ reason: "Consulta" });
  function submit(e) {
    e.preventDefault();
    if (form.email !== form.email2) {
      alert("El correo electronico no coincide con la confirmacion");
      return
    }

    fetch('https://buscadores.adn.com.mx/lapi/contact-form', {
      method: 'POST',
      mode: 'no-cors', // no-cors, *cors, same-origin

      body: JSON.stringify(form)
    })
  }
  return (<form className="contact-form" onSubmit={submit}>
    <div id="contact-us">Ponte en contácto con nosotros</div>
    <div id="contact-subtitle">Queremos saber tus comentarios, inconformidades o sugerencias</div>
    <div id="reason">
      <label>Motivo del mensaje</label>
      <select className="contact-select" value={form.reason} onChange={(ev) => { updateForm({ ...form, reason: ev.target.value }) }}>
        <option value="Consulta" defaultValue >Consulta</option>
        <option value="Bolsa de trabajo" >Bolsa de trabajo</option>
        <option value="Problema" >Problema con algún servicio/Comentarios</option>
        <option value="Otro" >Otro</option>
      </select>
    </div>
    { (form.reason === 'Consulta' || form.reason === 'Problema') && <input className="contact-input" name="orden" type="text" title="Número de orden" placeholder="Número de orden" maxLength="255" onChange={(ev) => { updateForm({ ...form, order: ev.target.value }) }} />}
    <input className="contact-input" required name="name" type="text" title="Nombre(s)" placeholder="* Nombre(s)" maxLength="255" aria-required="true" onChange={(ev) => { updateForm({ ...form, name: ev.target.value }) }} />
    <input className="contact-input" required name="lastname" type="text" title="Apellido paterno" placeholder="* Apellido paterno" maxLength="255" aria-required="true" onChange={(ev) => { updateForm({ ...form, lastname: ev.target.value }) }} />
    <input className="contact-input" required name="lastname2" type="text" title="Apellido materno" placeholder="* Apellido materno" maxLength="255" aria-required="true" onChange={(ev) => { updateForm({ ...form, lastname2: ev.target.value }) }} />
    <input className="contact-input" required type="email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2}|(com|net|org|e|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$" name="email" title="E-mail" placeholder="* E-mail" maxLength="255" aria-required="true" onChange={(ev) => { updateForm({ ...form, email: ev.target.value }) }} />
    <input className="contact-input" required name="confirmacion" type="text" title="confirmacion email" placeholder="* confirmacion email" maxLength="255" aria-required="true" onChange={(ev) => { updateForm({ ...form, email2: ev.target.value }) }} />
    <input className="contact-input" required type="text" name="phone" title="Teléfono" placeholder="* Teléfono" maxLength="255" aria-required="true" onChange={(ev) => { updateForm({ ...form, phone: ev.target.value }) }} />
    <div id="place">
      <label className="label-suc">Sucursal</label>
      <select className="contact-select" onChange={(ev) => { updateForm({ ...form, place: ev.target.value }) }}>
        <option disabled defaultValue >Seleccione una opcion</option>
        <option value="Balbuena"  >Balbuena</option>
        <option value="Centro" >Centro</option>
        <option value="Hospital General" >Hospital General</option>
        <option value="Polanco" >Polanco</option>
        <option value="Metepec" >Metepec</option>
        <option value="Cuatro caminos" >Cuatro caminos</option>
        <option value="Cuautitlán" >Cuautitlán</option>
        <option value="Linda vista" >Linda vista</option>
        <option value="Lomas verdes" >Lomas verdes</option>
        <option value="Satélite" >Satélite</option>
        <option value="Plaza oriente" >Plaza oriente</option>
        <option value="Santa martha" >Santa martha</option>
        <option value="Centenario" >Centenario</option>
        <option value="Coyoacán" >Coyoacán</option>
        <option value="Del valle" >Del valle</option>
        <option value="Miramontes" >Miramontes</option>
        <option value="Plateros" >Plateros</option>
        <option value="Revolución" >Revolución</option>
        <option value="Santa fe" >Santa fe</option>
        <option value="Mérida altabrisa" >Mérida altabrisa</option>
        <option value="Mérida centro" >Mérida centro</option>
      </select>
    </div>
    <textarea className='contact-area' placeholder="Mensaje" onChange={(ev) => { updateForm({ ...form, message: ev.target.value }) }}></textarea>
    <div id="img-container">
      <img src="./692.jpg" alt="" className="capcha" />
      <input className="contact-input capcha-text" name="Capcha" type="text" title="Escribe el texto de la imagen " placeholder="* Escribe el texto de la imagen" maxLength="255" aria-required="true" />
    </div>
    <input className="form-button" id="form-button" type="submit" value="Enviar" />

  </form>)

}


const domContainer = document.querySelector('#form_container');
ReactDOM.render(<LapiContactForm />, domContainer);