// JavaScript Document


function busquedaForm ()
{
	var busqueda	= document.getElementById('busqueda').value; 
	
	if(busqueda != "")
	{
		document.buscador.submit(); 
	}
}

function seleccionIdioma ()
{
	document.selectLanguage.submit(); 
}

function contactarFormulario ()
{
	var nom			= document.getElementById('nom').value;
	var cognoms		= document.getElementById('cognoms').value;
	var mail		= document.getElementById('email').value;
	
	var valido = true;
	
	// Si no acepta las condiciones no es válido
	if(!document.getElementById('condiciones').checked)
	{
		valido = false;	
	}
	
	// Si los campos estan vacios no es válido
	if((nom == "") || (cognoms == "") || (mail == ""))
	{
		valido = false;	
	}

	if(valido)
	{
		document.formContacte.submit(); 
	}
	else
	{
		document.getElementById('mensajeErrorContacto').style.display = "block";
		document.getElementById('mensajeResultadoContacto').style.display = "none";
	}
}

function formularioFormulario ()
{
	var nom			= document.getElementById('nom').value;
	var cognoms		= document.getElementById('cognoms').value;
	var mail		= document.getElementById('email').value;
	var professio	= document.getElementById('professio').value;
	var datasol		= document.getElementById('datasolicitud').value;
	
	var tipuscarrer	= document.getElementById('tipuscarrer').value;
	var carrer		= document.getElementById('nomcarrer').value;
	var pis			= document.getElementById('pisporta').value;
	var postal		= document.getElementById('dispostal').value;
	var poblacio	= document.getElementById('poblacio').value;
	var provincia	= document.getElementById('provincia').value;
	var pais		= document.getElementById('pais').value;

	var valido = true;
	
	// Si no acepta las condiciones no es válido
	if(!document.getElementById('condiciones').checked)
	{
		valido = false;	
	}
	
	// Si los campos estan vacios no es válido
	if((nom == "") || (cognoms == "") || (mail == "") || (professio == "") || (datasol == "") || (tipuscarrer == "") || (carrer == "") || (pis == "") || (postal == "") || (poblacio == "") || (provincia == "") || (pais == ""))
	{
		valido = false;	
	}
	
	if(valido)
	{
		document.formFormulario.submit(); 
	}
	else
	{
		document.getElementById('mensajeErrorFormulario').style.display = "block";
		document.getElementById('mensajeResultadoFormulario').style.display = "none";
	}
}

function formularioParticipaFormulario ()
{
	var nom			= document.getElementById('nom').value;
	var cognoms		= document.getElementById('cognoms').value;
	var mail		= document.getElementById('email').value;
	var carrec		= document.getElementById('carrec').value;
	var empresa		= document.getElementById('empresa').value;
	var telefons	= document.getElementById('telef').value;
	
	var tipuscarrer	= document.getElementById('tipuscarrer').value;
	var carrer		= document.getElementById('nomcarrer').value;
	var pis			= document.getElementById('pisporta').value;
	var postal		= document.getElementById('dispostal').value;
	var poblacio	= document.getElementById('poblacio').value;
	var provincia	= document.getElementById('provincia').value;
	var pais		= document.getElementById('pais').value;

	var valido = true;
	
	// Si no acepta las condiciones no es válido
	if(!document.getElementById('condiciones').checked)
	{
		valido = false;	
	}
	
	// Si los campos estan vacios no es válido
	if((nom == "") || (cognoms == "") || (mail == "") || (carrec == "") || (empresa == "") || (telefons == "") || (tipuscarrer == "") || (carrer == "") || (pis == "") || (postal == "") || (poblacio == "") || (provincia == "") || (pais == ""))
	{
		valido = false;	
	}
	
	if(valido)
	{
		document.formParticipa.submit(); 
	}
	else
	{
		document.getElementById('mensajeErrorFormulario').style.display = "block";
		document.getElementById('mensajeResultadoFormulario').style.display = "none";
	}
}

function formularioAreaEduc ()
{
	var nom			= document.getElementById('nom').value;
	var cognoms		= document.getElementById('cognoms').value;
	var mail		= document.getElementById('email').value;
	var centre		= document.getElementById('centreeduc').value;
	
	var valido = true;
	
	// Si no acepta las condiciones no es válido
	if(!document.getElementById('condiciones').checked)
	{
		valido = false;	
	}
	
	// Si los campos estan vacios no es válido
	if((nom == "") || (cognoms == "") || (mail == "") || (centre == ""))
	{
		valido = false;	
	}
	
	if(valido)
	{
		document.formAreaEduc.submit(); 
	}
	else
	{
		document.getElementById('mensajeErrorAreaEduc').style.display = "block";
		document.getElementById('mensajeResultadoAreaEduc').style.display = "none";
	}
}

function formularioActivitats ()
{
	var nom			= document.getElementById('nom').value;
	var cognoms		= document.getElementById('cognoms').value;
	var mail		= document.getElementById('email').value;
	var tipuscarrer	= document.getElementById('tipuscarrer').value;
	var carrer		= document.getElementById('nomcarrer').value;
	var pis			= document.getElementById('pisporta').value;
	var postal		= document.getElementById('dispostal').value;
	var poblacio	= document.getElementById('poblacio').value;
	var provincia	= document.getElementById('provincia').value;
	var pais		= document.getElementById('pais').value;
	
	var valido = true;
	
	// Si no acepta las condiciones no es válido
	if(!document.getElementById('condiciones').checked)
	{
		valido = false;	
	}
	
	// Si los campos estan vacios no es válido
	if((nom == "") || (cognoms == "") || (mail == "") || (tipuscarrer == "") || (carrer == "") || (pis == "") || (postal == "") || (poblacio == "") || (provincia == "") || (pais == ""))
	{
		valido = false;	
	}
	
	if(valido)
	{
		document.formActivitats.submit(); 
	}
	else
	{
		document.getElementById('mensajeErrorActivitats').style.display = "block";
		document.getElementById('mensajeResultadoActivitats').style.display = "none";
	}
}

function formularioFesteAmic ()
{
	var nom			= document.getElementById('nom').value;
	var cognoms		= document.getElementById('cognoms').value;
	var mail		= document.getElementById('email').value;
	var dni			= document.getElementById('numdni').value;
	var professio	= document.getElementById('professio').value;
	
	var tipuscarrer	= document.getElementById('tipuscarrer').value;
	var carrer		= document.getElementById('nomcarrer').value;
	var pis			= document.getElementById('pisporta').value;
	var postal		= document.getElementById('dispostal').value;
	var poblacio	= document.getElementById('poblacio').value;
	var provincia	= document.getElementById('provincia').value;
	var pais		= document.getElementById('pais').value;
	
	var data		= document.getElementById('datanaixement').value;
	
	var valido = true;
	
	// Si no acepta las condiciones no es válido
	if(!document.getElementById('condiciones').checked)
	{
		valido = false;	
	}
	
	// Si los campos estan vacios no es válido
	if((nom == "") || (cognoms == "") || (mail == "") || (tipuscarrer == "") || (carrer == "") || (pis == "") || (postal == "") || (poblacio == "") || (provincia == "") || (pais == "") || (dni == "") || (professio == "") || (data == ""))
	{
		valido = false;
		
		//alert (nom + " / " + cognoms + " / " + mail + " / " + tipuscarrer + " / " + carrer + " / " + pis + " / " + postal + " / " + poblacio + " / " + provincia + " / " + pais + " / " + dni + " / " + professio + " / " + data );
	}
	
	if(valido)
	{
		document.formFesteAmic.submit(); 
	}
	else
	{
		document.getElementById('mensajeErrorFormulario').style.display = "block";
		document.getElementById('mensajeResultadoAreaEduc').style.display = "none";
	}
}

function formularioReservesGrups ()
{
	var nomcentre	= document.getElementById('nomcentre').value;
	var contacte	= document.getElementById('contacte').value;
	var mail		= document.getElementById('email').value;
	var centre		= document.getElementById('centreeduc').value;
	var dia			= document.getElementById('diavisita').value;
	var hora		= document.getElementById('horavisita').value;
	var nombrevis	= document.getElementById('nombrevisitants').value;
	var nivell		= document.getElementById('nivellvisitants').value;
	
	var valido = true;
	
	// Si no acepta las condiciones no es válido
	if(!document.getElementById('condiciones').checked)
	{
		valido = false;	
	}
	
	// Si los campos estan vacios no es válido
	if((nomcentre == "") || (contacte == "") || (mail == "") || (centre == "") || (dia == "") || (hora == "") || (nombrevis == "") || (nivell == ""))
	{
		valido = false;	
	}
	
	if(valido)
	{
		document.formReservesGrups.submit(); 
	}
	else
	{
		document.getElementById('mensajeErrorAreaEduc').style.display = "block";
		document.getElementById('mensajeResultadoAreaEduc').style.display = "none";
	}
}

function formularioAmicsFundacioCalendari ()
{
	var nom			= document.getElementById('nomtitular').value;
	var numamic		= document.getElementById('numamic').value;
	var mail		= document.getElementById('email').value;
	var dni			= document.getElementById('numdni').value;
	
	var valido = true;
	
	// Si no acepta las condiciones no es válido
	if(!document.getElementById('condiciones').checked)
	{
		valido = false;	
	}
	
	// Si los campos estan vacios no es válido
	if((nom == "") || (numamic == "") || (mail == "") || (dni == ""))
	{
		valido = false;	
	}
	
	if(valido)
	{
		document.formAmicsCalendari.submit(); 
	}
	else
	{
		document.getElementById('mensajeErrorActivitats').style.display = "block";
		document.getElementById('mensajeResultadoActivitats').style.display = "none";
	}
}

function formularioSalaPremsaCanviPassword ()
{
	var correu		= document.getElementById('email').value;
	var antpass		= document.getElementById('antpass').value;
	var pass		= document.getElementById('pass').value;
	var repass		= document.getElementById('repass').value;
	
	var valido = true;
	var repepass = false;
		
	// Si los campos estan vacios no es válido
	if( (antpass == "" ) || (correu == "") || (pass == "") )
	{
		valido = false;	
	}
	
	if((pass != repass))
	{
		valido = false;
		repepass = true;
	}
	
	if(valido)
	{
		document.formSalaPremsaCanviPass.submit(); 
	}
	else
	{
		if(repepass)
		{
			document.getElementById('mensajeErrorRepeticions').style.display = "block";
			document.getElementById('mensajeErrorCampos').style.display = "none";
			document.getElementById('mensajeResultadoSalaPremsa').style.display = "none";
		}
		else
		{
			document.getElementById('mensajeErrorRepeticions').style.display = "none";
			document.getElementById('mensajeErrorCampos').style.display = "block";
			document.getElementById('mensajeResultadoSalaPremsa').style.display = "none";
		}
	}
}

function formularioSalaPremsa ()
{
	var nom			= document.getElementById('nom').value;
	var carrec		= document.getElementById('carrec').value;
	var mitja		= document.getElementById('mitja').value;
	var correu		= document.getElementById('email').value;
	var recorreu	= document.getElementById('repemail').value;
	var telef		= document.getElementById('telef').value;
	var pass		= document.getElementById('pass').value;
	var repass		= document.getElementById('repass').value;
	
	var valido = true;
	var repemail = false;
	
	// Si no acepta las condiciones no es válido
	if(!document.getElementById('condiciones').checked)
	{
		valido = false;	
	}
	
	// Si los campos estan vacios no es válido
	if((nom == "") || (carrec == "") || (mitja == "") || (telef == "" ) || (correu == "") || (pass == ""))
	{
		valido = false;	
	}
	
	if((correu != recorreu) || (pass != repass))
	{
		valido = false;
		repemail = true;
	}
	
	if(valido)
	{
		document.formSalaPremsa.submit(); 
	}
	else
	{
		if(repemail)
		{
			document.getElementById('mensajeErrorRepeticions').style.display = "block";
			document.getElementById('mensajeErrorActivitats').style.display = "none";
			document.getElementById('mensajeResultadoActivitats').style.display = "none";
		}
		else
		{
			document.getElementById('mensajeErrorRepeticions').style.display = "none";
			document.getElementById('mensajeErrorActivitats').style.display = "block";
			document.getElementById('mensajeResultadoActivitats').style.display = "none";
		}
	}
}

