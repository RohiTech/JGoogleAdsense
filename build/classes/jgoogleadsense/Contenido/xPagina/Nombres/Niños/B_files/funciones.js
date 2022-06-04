// JavaScript Document
/* MENU PRINCIPAL*/
function $$(id){
	return document.getElementById(id);
}

function cambiarMacro(id){
	
	var menu = document.getElementById(id);
	var rutaAmpliar = '/img/btn_menu_on.gif';
	var rutaContraer = '/img/btn_menu_off.gif';
	if(id=='temas'){
		var rutaAmpliarT = '/img/icono_temas_on.gif';
		var rutaContraerT = '/img/icono_temas.gif';
	}
	if(id=='servicios'){
		var rutaAmpliarT = '/img/icono_servicios_on.gif';
		var rutaContraerT = '/img/icono_servicios.gif';
	}
	if(id=='herramientas'){
		var rutaAmpliarT = '/img/icono_herramientas_on.gif';
		var rutaContraerT = '/img/icono_herramientas.gif';
	}
	if(id=='especiales'){
		var rutaAmpliarT = '/img/icono_especiales_on.gif';
		var rutaContraerT = '/img/icono_especiales.gif';
	}
	if(id=='empresas'){
		var rutaAmpliarT = '/img/icono_empresas_on.gif';
		var rutaContraerT = '/img/icono_empresas.gif';
	}
	
	if(document.getElementById(id+"_tb")){
	var submenu = document.getElementById(id+"_tb");
	var imagen = document.images[id+"_img"];
	var lin = document.getElementById(id+"_td");
	if(submenu.style.display =="none"){
		imagen.src = rutaAmpliar;
		submenu.style.display ="block";
		lin.style.color ="#ffffff";
		menu.className = "stTbBotonMacroOn";
	}else{
		imagen.src = rutaContraer;
		lin.style.color ="#326e9c";
		submenu.style.display ="none";
		menu.className = "stTbBotonMacro";
	}
	}
}

function cambiarMenu(id){
	
	var menu = document.getElementById(id);
	var rutaAmpliar = '/img/vineta_menu_on.gif';
	var rutaContraer = '/img/vineta_menu_off.gif';
		
	var submenu = document.getElementById(id+"_sub");
	var imagen = document.images[id+"_img"];
	var mlink = document.getElementById(id+"_link");
	if(submenu){
		if(submenu.style.display =="none"){
			imagen.src = rutaAmpliar;
			imagen.setAttribute('alt','Contraer');
			imagen.setAttribute('title','Contraer');
			submenu.style.display ="block";
			mlink.className = "menuOff";
		}else{
			imagen.src = rutaContraer;
			imagen.setAttribute('alt','Expandir');
			imagen.setAttribute('title','Expandir');
			submenu.style.display ="none";
			mlink.className = "menuOn";
		}
	}
}
/* BUSCADOR*/
function buscador(){
	if(document.buscador.id.value==""){
		alert("Ingrese una palabra clave");
	}else{
		if(document.buscador.id.value.length<=2){
			alert("La palabra clave debe contener por lo menos 3 letras.");
		}else{
			document.buscador.submit();
		}
	}
}
/*COMENTARIOS*/

function enviarComentario(){
	var Nombre = document.comentario.NombreCom.value;
	var Email = document.comentario.EmailCom.value;
	var Comentario = document.comentario.Comentario.value;
	var Codigo = document.comentario.Codigo.value;

	var strError = "";
	if(Nombre==""){
		strError+= "- Ingresa tu Nombre\n";
	}
	if(Email!=""){
		var p = Email.indexOf("@");
		if(p<1){
			strError+= "- El Email debe ser una direcci\xf3n de correo.\n";
		}
	}
	if(Comentario==""){
		strError+= "- Ingresa tu Comentario.\n";
	}
	if(Codigo==""){
		strError+= "- Ingresa el C\xf3digo de Seguridad.\n";
	}
	
	if(strError!=""){
		alert(strError);
	}else{
		document.comentario.submit();	
	}
}
function enviarComentarioForo(){
	var Nombre = document.comentario.Nombre.value;
	var Titulo = document.comentario.Titulo.value;
	var Comentario = document.comentario.Comentario.value;
	var Codigo = document.comentario.Codigo.value;
	var strError = "";
	if(Nombre==""){
		strError+= "- Ingresa tu Nombre\n";
	}
	if(Titulo==""){
		strError+= "- Ingrese el T\xedtulo.\n";
	}
	if(Comentario==""){
		strError+= "- Ingresa tu Comentario.\n";
	}
	if(Codigo==""){
		strError+= "- Ingresa el C\xf3digo de Seguridad.\n";
	}
	
	if(strError!=""){
		alert(strError);
	}else{
		document.comentario.submit();	
	}
}
/*CONTACTO*/

function enviarContacto(){
	var Nombre = document.contacto.Nombre.value;
	var Email = document.contacto.Email.value;
	var Mensaje = document.contacto.Mensaje.value;
	var Codigo = document.contacto.Codigo.value;
	var strError = "";
	if(Nombre==""){
		strError+= "- Ingresa tu Nombre\n";
	}
	if(Email==""){
		strError+= "- Ingresa tu Email\n";
	}else{
		var p = Email.indexOf("@");
		if(p<1){
			strError+= "- El Email debe ser una direcci\xf3n de correo.\n";
		}
	}
	if(Mensaje==""){
		strError+= "- Ingresa el Mensaje.\n";
	}
	if(Codigo==""){
		strError+= "- Ingresa el C\xf3digo de Seguridad.\n";
	}
	
	if(strError!=""){
		alert(strError);
	}else{
		document.contacto.submit();	
	}
}

/* PROMOCIONES */

function enviarPromocion(pregunta,foto,campos,tituloCampos){
	var Nombre = document.promocion.Nombre.value;
	var Email = document.promocion.Email.value;
	var Cedula = document.promocion.Cedula.value;
	var Digito = document.promocion.DigitoControl.value;
	var Respuesta = document.promocion.Respuesta.value;
	var Codigo = document.promocion.Codigo.value;
	
	var strError = "";
	
	if(Nombre==""){
		strError+= "- Ingresa tu Nombre y Apellido\n";
	}
	if(Email==""){
		strError+= "- Ingresa tu Email\n";
	}else{
		if(Email!=""){
			var p = Email.indexOf("@");
			if(p<1){
				strError+= "- El Email debe ser una direcci\xf3n de correo.\n";
			}
		}
	}
	if(Cedula==""){
		strError+= "- Ingresa tu C\xe9dula.\n";
	}else{
		if(isNaN(Cedula)){
			strError+= "- La C\xe9dula debe ser un n\xfamero.\n";
		}
	}
	if(Digito==""){
		strError+= "- Ingresa el D\xedgito de Control de tu C\xe9dula.\n";
	}else{
		if(isNaN(Digito)){
			strError+= "- El D\xcdgito de Control debe ser un n\xfamero.\n";
		}
	}
	if(pregunta==1){
		if(Respuesta==""){
			strError+= "- Ingresa tu Respuesta.\n";
		}
	}
	if(foto==1){
		var fotou = document.promocion.userfile.value;
		if(fotou==""){
			strError+= "- Ingresa la Foto.\n";
		}
	}
	if(campos==1){
		var fo = document.promocion;
		var opcion = 0;
		var copcion = 0;
		var cmultiple = 0;
		var multiple = 0;
		var ctexto = 0;
		var erTexto = "";
		
		for(i=0;i<fo.length;i++){
			var nombre = fo[i].name.split("_");
			if(nombre[0]=="campotexto" && nombre[1]==1 && fo[i].value==""){
				erTexto="- Debe completar todos los campos obligatorios en: "+tituloCampos+" .\n"
			}
			if(nombre[0]=="campomultiple"){
				cmultiple++;
				if(fo[i].checked){
					multiple++;
				}
			}
			if(nombre[0]=="campoopcion"){
				copcion++;
				if(fo[i].checked){
					opcion++;
				}
			}
		}
		if(cmultiple>0 && multiple==0){
			strError+="- Debe seleccionar por lo menos una opci\xf3n en: "+tituloCampos+".\n"
		}
		if(copcion>0 && opcion==0){
			strError+="- Debe seleccionar una opci\xf3n en: "+tituloCampos+".\n"
		}
		if(erTexto!=""){
			strError+=erTexto;
		}
	}
	if(Codigo==""){
		strError+= "- Ingresa el C\xf3digo de Seguridad\n";
	}
	if(strError!=""){
		alert(strError);
	}else{
		document.promocion.submit();	
	}
}

/* CONSULTAS*/
function enviarConsulta(){
	var Tema = document.consulta.Tema.value;
	var Nombre = document.consulta.Nombre.value;
	var Email = document.consulta.Email.value;
	var Comentario = document.consulta.Consulta.value;
	var Titulo = document.consulta.Titulo.value;
	var Codigo = document.consulta.Codigo.value;
	
	var strError = "";
	if(Nombre==""){
		strError+= "- Ingresa tu Nombre\n";
	}
	if(Titulo==""){
		strError+= "- Ingresa el T\xedtulo de tu Consulta\n";
	}
	
	if(Email!=""){
		var p = Email.indexOf("@");
		if(p<1){
			strError+= "- El Email debe ser una direcci\xf3n de correo.\n";
		}
	}
	if(Tema==0){
		strError+= "- Seleccione un Tema.\n";
	}
	if(Comentario==""){
		strError+= "- Ingresa la Consulta.\n";
	}
	if(Codigo==""){
		strError+= "- Ingresa el C\xf3digo de Seguridad.\n";
	}
	
	if(strError!=""){
		alert(strError);
	}else{
		document.consulta.submit();	
	}
}


/*AMIGO*/

function enviarAmigo(){
	var Nombre = document.amigo.Nombre.value;
	var NombreAmigo = document.amigo.NombreAmigo.value;
	var Email = document.amigo.Email.value;
	var EmailAmigo = document.amigo.EmailAmigo.value;
	var Codigo = document.amigo.Codigo.value;
	var strError = "";
	if(Nombre==""){
		strError+= "- Ingresa tu Nombre\n";
	}
	
	if(Email==""){
		strError+= "- Ingresa tu Email\n";
	}else{
		var p = Email.indexOf("@");
		if(p<1){
			strError+= "- El Email debe ser una direcci\xf3n de correo.\n";
		}
	}
	if(NombreAmigo==""){
		strError+= "- Ingresa el Nombre de tu Amigo\n";
	}
	if(EmailAmigo==""){
		strError+= "- Ingresa el Email de tu Amigo\n";
	}else{
		var p = EmailAmigo.indexOf("@");
		if(p<1){
			strError+= "- El Email de tu Amigo debe ser una direcci\xf3n de correo.\n";
		}
	}
	if(Codigo==""){
		strError+= "- Ingresa el C\xf3digo de Seguridad\n";
	}
	if(strError!=""){
		alert(strError);
	}else{
		document.amigo.submit();	
	}
}


function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

/* DICCIONARIOS*/

function expandirLetra(id){
	var letra = document.getElementById(id);
	var letraDir = document.getElementById("dir_"+id);
	if(letra){
		if(letra.style.display=="none"){
			letra.style.display = "block";
			letraDir.className = "tdDiccionarioOn";
		}else{
			letra.style.display = "none";
			letraDir.className = "tdDiccionarioOff";
		}
	}
}

/* EMPRESEAS*/

function enviarLoginEmpresa(){
	var usuario = document.login_empresa.Usuario.value;
	var clave = document.login_empresa.Clave.value;
	var strError = "";
	if(!usuario){ strError+="- Ingresa el Usuario\n";}
	if(!clave){ strError+="- Ingresa la Clave\n";}
	if(strError!=""){
		alert(strError);
	}else{
		document.login_empresa.submit();	
	}
}

/* SUSCRIPCION*/
function deleteTuEmail(){
	var email = document.getElementById("Email_sus").value;
	if(email=="Tu e-mail"){ 
		document.getElementById("Email_sus").value = "";
	}
}
function enviarSuscripcionSimple(){
	var email = document.getElementById("Email_sus").value;
	var strError = "";
	if(email=="" || email=="Tu e-mail"){ 
		strError+="- Ingresa Tu e-mail\n";
	}else{
		var p = email.indexOf("@");
		if(p<1){
			strError+="- El email debe ser una correo correcto.\n";	
		}
	}
	if(strError!=""){
		document.getElementById("msg_susc").innerHTML = strError;
		document.getElementById("msg_susc").style.display = "block";
		//alert(strError);
	}else{
		//window.location = "/registro/"+email+"/";
		comprobarSuscripcion();
	}
}
function comprobarSuscripcion(){
	$$("msg_susc").style.background = "#0089e1";
	$$("Email_sus").disabled=true;
	$$("msg_susc").style.display = "block";
	$$("msg_susc").innerHTML = "Comprobando disponibilidad...aguarda.";
	var email = $$("Email_sus").value;
	var ajax = Ajax();
	ajax.open("GET","/data/registro_ajax.php?suscripcion_disponible="+email+"&id=0&r="+Math.random(),true);
	ajax.onreadystatechange = function(){
	if(ajax.readyState==4){
			var result = parseInt(ajax.responseText);
			switch(result){
				case 1:
					window.location = "/registro/"+email+"/";	
				break;
				case 0:
					$$("msg_susc").style.background = "#f4430c";
					$$("msg_susc").style.display = "block";
					$$("msg_susc").innerHTML = "El email ingresado ya se encuentra registrado, ingresa otro email.";
					$$("Email_sus").disabled=false;
				break;
				default:
					$$("msg_susc").style.background = "#f4430c";
					$$("msg_susc").style.display = "block";
					$$("msg_susc").innerHTML = "No se puedo llevar a cabo el proceso. Regresa m&aacute;s tarde.";
					$$("Email_sus").disabled=false;
				break;
			}
		}
	}
	ajax.send(null);
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_validateForm() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
  for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]);
    if (val) { nm=val.name; if ((val=val.value)!="") {
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+' debe contener una direcci\xf3n de mail.\n';
      } else if (test!='R') { num = parseFloat(val);
        if (isNaN(val)) errors+='- '+nm+' debe contener un n\xfamero.\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- '+nm+' debe contener un n\xfamero entre '+min+' y '+max+'.\n';
    } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' es necesario.\n'; }
  } if (errors) alert('Los siguientes errores han ocurrido:\n'+errors);
  document.MM_returnValue = (errors == '');
}

// ALBUM

function cambiarAlbum(valor){
	var ar = valor.split("�");
	if(ar[0]!=0){
		document.ingreso.Padres.value = ar[1]; 
		document.ingreso.Nombre_Ninio.value = ar[3];
		
		ar2 = ar[2].split("/");
		document.ingreso.Dia.value = ar2[0];
		document.ingreso.Mes.value = ar2[1];
		document.ingreso.Anio.value = ar2[2];
	}
	
}

function enviarAlbum(tipo){
	
	var er = "";
	var dia = document.ingreso.Dia.value;
	var mes = document.ingreso.Mes.value;
	var anio = document.ingreso.Anio.value;
	
	var foto = document.ingreso.userfile.value;
		
	if(document.ingreso.Nombre_Ninio.value==""){
		er+="Ingresa el nombre del ni\xf1o\n";	
	}
	if(dia==""){
		er+="Ingresa el d\xeda de nacimiento\n";	
	}else{
		if(isNaN(dia)){
			er+="El d\xeda debe ser un n\xfamero\n";	
		}else{
			if(dia>31 || dia<0){
				er+="El d\xeda debe ser un valor entre 1 y 31\n";		
			}
		}
	}
	if(mes==""){
		er+="Ingresa el mes de nacimiento\n";	
	}else{
		if(isNaN(mes)){
			er+="El mes debe ser un n\xfamero\n";	
		}else{
			if(mes>12 || mes<0){
				er+="El mes debe ser un valor entre 1 y 12\n";		
			}
		}
	}
	if(anio==""){
		er+="Ingresa el a\xf1o de nacimiento\n";	
	}else{
		if(isNaN(anio)){
			er+="El a\xf1o debe ser un n\xfamero\n";	
		}else{
			if(anio.lenght<4){
				er+="El a\xf1o debe contener 4 cifras\n";		
			}
		}
	}
	if(tipo==1){
		if(foto==""){
			er+="Ingresa la foto\n";	
		}else{
			var ext = foto.substring(foto.length-3,foto.length);
			if(ext != "gif" & ext!="jpg"){
				er+="La extensi\xf3n de la foto debe ser gif o jpg\n";	
			}
		}
	}
	if(tipo==2){
		if(foto!=""){
			var ext = foto.substring(foto.length-3,foto.length);
			if(ext != "gif" & ext!="jpg"){
				er+="La extensi\xf3n de la foto debe ser gif o jpg\n";	
			}
		}
	}
	if(er!=""){
		alert(er);	
	}else{
		document.ingreso.submit();	
	}
	
	
}
function eliminarAlbum(id){
	if(window.confirm("Est\xe1 seguro/a que desea eliminar la foto?")){
		window.location = "mis_fotos.php?elim="+id;				
	}
}

function expandir(id){
	var tb = document.getElementById(id);
	if(tb){
		if(tb.style.display == "block"){
			tb.style.display = "none";
		}else{
			tb.style.display = "block";
		}
	}
}

function enviarCantidad(cantidad,id){
	document.carrito.cantidad.value=cantidad;
	document.carrito.idProducto.value=id;
	document.carrito.submit();
}

function enviarCompra(){
	var nombre = document.compra.Nombre.value;
	var email = document.compra.Email.value;
	var telefono = document.compra.Telefono.value;
	var ciudad = document.compra.Ciudad.value;
	var calle = document.compra.Calle.value;
	
	var strError = "";
	if(nombre==""){ strError+="- Ingresa el Nombre\n";}
	if(email==""){ 
		strError+="- Ingresa el Email\n";
	}else{
		var p = email.indexOf("@");
		if(p<1){
			strError+="- El email debe ser una direcci\xf3n correcta.\n";	
		}
	}
	if(telefono==""){ strError+="- Ingresa el Tel\xc9fono\n";}
	if(ciudad==""){ strError+="- Ingresa la Ciudad\n";}
	if(calle==""){ strError+="- Ingresa la Calle\n";}
	if(strError!=""){
		alert(strError);
	}else{
		document.compra.submit();	
	}
}

// LAYER

function cerrarLayer(){
	var ly = document.getElementById("layer_central");
	if(ly){
		if(ly.style.visibility == "visible"){
			ly.style.visibility = "hidden";
			ly.style.display = "none";
		}
	}
}
function crearLayer(tiempo){
	var ly = document.getElementById("layer_central");
	if(ly){
		if(ly.style.visibility == "hidden"){
			ly.style.visibility = "visible";
			ly.style.display = "block";
		}
		tiempo=setTimeout("cerrarLayer()",tiempo);
	}
}

/* AJAX */

function Ajax(){
	var xmlhttp=false;
 	try{
 		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
 	}catch(e) {
 		try{
 			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 		}catch (E) {
 			xmlhttp = false;
 		}
  	}
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
 		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}
function mostrarCalificaciones(id){
	var ajax = Ajax();
	ajax.open("GET", "/data/ajax_calificacion.php?id="+id,true);
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4) {
			document.getElementById("calificacion").innerHTML= ajax.responseText;
		}else{
			var tb="<table width=\"530\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border: 1px dotted #CCCCCC; margin-top:5px; margin-bottom:5px;\">";
			tb+="<tr><td style=\"padding:10px;\">Cargando calificaciones...</td></tr></table>";
			document.getElementById("calificacion").innerHTML = tb;
		}
	}
	ajax.send(null);
}


function enviarCalificaciones(id,voto){
	if(voto==0){
		alert("Seleccione la calificaci\xf3n.");
	}else{
		var ajax = Ajax();
		ajax.open("GET", "/data/ajax_calificacion.php?id="+id+"&voto="+voto,true);
		ajax.onreadystatechange=function(){
			if (ajax.readyState==4) {
				document.getElementById("calificacion").innerHTML= ajax.responseText;
			}else{
				var tb="<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border: 1px dotted #CCCCCC; margin-top:5px; margin-bottom:5px;\">";
				tb+="<tr><td style=\"padding:10px;\">Enviando calificaci\xf3n...</td></tr></table>";
				document.getElementById("calificacion").innerHTML = tb;
			}
		}
		ajax.send(null);
	}
}
var banner_a = 0;
var banner_b = 0;
var banner_c = 0;
var banner_d = 0;
var banner_e = 0;
var banner_f = 0;
var banner_g = 0;
var banner_h = 0;
var banner_i = 0;

function getBanner(zona){
	
	var id=0;
	var tiempo=0;
	var alto = 20;
	
	switch(zona){
		case "a":
			alto = alto_a;
			if(banner_a==ar_a.length){banner_a = 0;}
			id = ar_a[banner_a];
			tiempo = ar_t_a[banner_a];
			banner_a++;
		break;
		case "b":
			alto = alto_b;
			if(banner_b==ar_b.length){banner_b = 0;}
			id = ar_b[banner_b];
			tiempo = ar_t_b[banner_b];
			banner_b++;
		break;
		case "c":
			alto = alto_c;
			if(banner_c==ar_c.length){banner_c = 0;}
			id = ar_c[banner_c];
			//alert(ar_c[banner_c])
			tiempo = ar_t_c[banner_c];
			banner_c++;
		break;
		case "d":
			alto = alto_d;
			if(banner_d==ar_d.length){banner_d = 0;}
			id = ar_d[banner_d];
			tiempo = ar_t_d[banner_d];
			banner_d++;
		break;
		case "e":
			alto = alto_e;
			if(banner_e==ar_e.length){banner_e = 0;}
			id = ar_e[banner_e];
			tiempo = ar_t_e[banner_e];
			banner_e++;
		break;
		case "f":
			alto = alto_f;
			if(banner_f==ar_f.length){banner_f = 0;}
			id = ar_f[banner_f];
			tiempo = ar_t_f[banner_f];
			banner_f++;
		break;
		case "g":
			alto = alto_g;
			if(banner_g==ar_g.length){banner_g = 0;}
			id = ar_g[banner_g];
			tiempo = ar_t_g[banner_g];
			banner_g++;
		break;
		case "h":
			alto = alto_h;
			if(banner_h==ar_h.length){banner_h = 0;}
			id = ar_h[banner_h];
			tiempo = ar_t_h[banner_h];
			banner_h++;
		break;
		case "i":
			alto = alto_i;
			if(banner_i==ar_i.length){banner_i = 0;}
			id = ar_i[banner_i];
			tiempo = ar_t_i[banner_i];
			banner_i++;
		break;
	}
	var ajax = Ajax();
	ajax.open("GET", "/data/ajax_banners.php?zona="+zona+"&id="+id,true);
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4) {
			document.getElementById("rotar_"+zona).innerHTML= ajax.responseText;
			//alert(ajax.responseText);
			setTimeout("getBanner('"+zona+"')",tiempo);
		}else{
			var tb="<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border: 1px dotted #CCCCCC;\">";
			tb+="<tr><td style=\"height:"+alto+"px;\"></td></tr></table>";
			document.getElementById("rotar_"+zona).innerHTML = tb;
			
		}
	}
	ajax.send(null);
}

function getBannerPortada(id,zona){
	var ajax = Ajax();
	ajax.open("GET", "/data/ajax_banners.php?zona="+zona+"&id="+id,true);
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4) {
			document.getElementById("banner_"+id).innerHTML= ajax.responseText;
		}else{
			document.getElementById("banner_"+id).innerHTML = "";
		}
	}
	ajax.send(null);
}

//v1.7
// Flash Player Version Detection
// Detect Client Browser type
// Copyright 2005-2007 Adobe Systems Incorporated.  All rights reserved.
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;

function ControlVersion()
{
	var version;
	var axo;
	var e;

	// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

	try {
		// version will be set for 7.X or greater players
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		version = axo.GetVariable("$version");
	} catch (e) {
	}

	if (!version)
	{
		try {
			// version will be set for 6.X players only
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			
			// installed player is some revision of 6.0
			// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
			// so we have to be careful. 
			
			// default to the first public version
			version = "WIN 6,0,21,0";

			// throws if AllowScripAccess does not exist (introduced in 6.0r47)		
			axo.AllowScriptAccess = "always";

			// safe to call for 6.0r47 or greater
			version = axo.GetVariable("$version");

		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 4.X or 5.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 3.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 2.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}
	
	return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	var flashVer = -1;
	
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");			
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			var versionRevision = descArray[3];
			if (versionRevision == "") {
				versionRevision = descArray[4];
			}
			if (versionRevision[0] == "d") {
				versionRevision = versionRevision.substring(1);
			} else if (versionRevision[0] == "r") {
				versionRevision = versionRevision.substring(1);
				if (versionRevision.indexOf("d") > 0) {
					versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
				}
			}
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if ( isIE && isWin && !isOpera ) {
		flashVer = ControlVersion();
	}	
	return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
	versionStr = GetSwfVer();
	if (versionStr == -1 ) {
		return false;
	} else if (versionStr != 0) {
		if(isIE && isWin && !isOpera) {
			// Given "WIN 2,0,0,11"
			tempArray         = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
			tempString        = tempArray[1];			// "2,0,0,11"
			versionArray      = tempString.split(",");	// ['2', '0', '0', '11']
		} else {
			versionArray      = versionStr.split(".");
		}
		var versionMajor      = versionArray[0];
		var versionMinor      = versionArray[1];
		var versionRevision   = versionArray[2];

        	// is the major.revision >= requested major.revision AND the minor version >= requested minor
		if (versionMajor > parseFloat(reqMajorVer)) {
			return true;
		} else if (versionMajor == parseFloat(reqMajorVer)) {
			if (versionMinor > parseFloat(reqMinorVer))
				return true;
			else if (versionMinor == parseFloat(reqMinorVer)) {
				if (versionRevision >= parseFloat(reqRevision))
					return true;
			}
		}
		return false;
	}
}

function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '';
  if (isIE && isWin && !isOpera)
  {
    str += '<object ';
    for (var i in objAttrs)
    {
      str += i + '="' + objAttrs[i] + '" ';
    }
    str += '>';
    for (var i in params)
    {
      str += '<param name="' + i + '" value="' + params[i] + '" /> ';
    }
    str += '</object>';
  }
  else
  {
    str += '<embed ';
    for (var i in embedAttrs)
    {
      str += i + '="' + embedAttrs[i] + '" ';
    }
    str += '> </embed>';
  }

  document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
      case "id":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}
