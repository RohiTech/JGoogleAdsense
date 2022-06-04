/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jgoogleadsense;

import java.net.MalformedURLException;
import java.net.URL;

import com.robtheis.aptr.language.Language;
import javax.swing.UIManager;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import japertiumtranslator.JApertiumTranslator;
import java.io.*;
import java.text.SimpleDateFormat;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;
import java.sql.DriverManager;

import java.util.Date;
import java.util.Vector;
import javax.swing.JOptionPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author jfrancisco
 */
public class MyClass
{
    Connection connection = null;
    Date hoy = new Date();
    
    Connection c = null;
    
    int contador = 0;
    
    private String de_usuario_correo = "", clave_correo = "", a_usuario_correo = "";
    
    public void EstablecerClaveCorreo(String clave)
    {
        clave_correo = clave;
    }
    
    public void EstablecerDeUsuarioCorreo(String correo)
    {
        de_usuario_correo = correo + "@gmail.com";
    }
    
    public void EstablecerAUsuarioCorreo(String correo)
    {
        a_usuario_correo = correo;
    }
    
    public void Aplicar_Caso(String directorio, String archivo, int caso)
    {
        JNombres nombres = new JNombres();
        
        switch(caso)
        {
            // Nombres para niñas
            case 1:
                nombres.Publicar_Contenido(directorio, archivo, 1);
                break;
               // Nombres para niñas
            case 2:
                nombres.Publicar_Contenido(directorio, archivo, 2);
                break;
        }
    }
    
    public void Listar_Archivos(String dir, int caso)
    {
        File archivos = new File(dir);
        File[] list = archivos.listFiles();

        for(int i = 0; i < list.length; i++)
        {
            if(!(list[i].isHidden()))
            {
                if(!(list[i].isDirectory()))
                {
                    this.Aplicar_Caso(list[i].getAbsolutePath(), list[i].getName(), 1);
                    contador++;
                }
                else
                {
                    Listar_Archivos(list[i].toString(), caso);
                }
            }
        }
    }
    
    public String Obtener_Directorio_Actual()
    {
        String directorio = "";
        
        try
        {
            directorio = new File("").getAbsolutePath();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        
        return directorio;
    }
    
    public String LeerArchivo(String archivo)
    {
        String strLinea = "";
        String texto = "", texto2 = "";
        
        int k = 0;
        
        try
        {
            // Abrimos el archivo
            FileInputStream fstream = new FileInputStream(archivo);
            
            // Creamos el objeto de entrada
            DataInputStream entrada = new DataInputStream(fstream);
            
            // Creamos el Buffer de Lectura
            BufferedReader buffer = new BufferedReader(new InputStreamReader(entrada));
            
            // Leer el archivo linea por linea
            while ((strLinea = buffer.readLine()) != null)
            {
                // Imprimimos la línea por pantalla
                //System.out.println (strLinea);
                
                k++;
                
                if(k == 90000)
                {
                    texto2 = texto2 + texto;
                    texto = "";
                    k = 0;
                    k++;
                    texto = texto + texto2;
                }
                
                texto = texto + strLinea + "\n";
            }
            
            // Cerramos el archivo
            entrada.close();
        }
        catch (Exception e)
        {
            //Catch de excepciones
            System.err.println("Ocurrio un error: " + e.getMessage());
        }
        
        return texto;
    }
    
    public void ConectarSQLLite()
    {
        try
        {
            Class.forName("org.sqlite.JDBC");
            c = DriverManager.getConnection("jdbc:sqlite:adsense.db");
        }
        catch(Exception e )
        {
            System.err.println( e.getClass().getName() + ": " + e.getMessage() );
            System.exit(0);
        }
        
        System.out.println("Opened database successfully");
    }
    
    public void IngresarEnlace(String nombre, String tema, String idioma, String publicado)
    {
        String sentencia = "";
        
        String fecha = new SimpleDateFormat("yyyyMMdd").format(new Date());
        
        int enlace_id = 
                (Integer) this.ObtenerValorCampoSQLite("SELECT COALESCE(MAX(e.enlace_id), 0) + 1 FROM enlace e;");
        
        sentencia = "INSERT INTO enlace VALUES(" + 
                enlace_id + ", '" + nombre + "', '" + tema + "', '" + fecha + "', '" + idioma + "', '" + publicado + "');";
        
        this.EjecutarSentenciaSQLite(sentencia);
    }
    
    public Object ObtenerValorCampoSQLite(String consultaSQL)
    {
        Object resultado = null;
        
        Statement s = null;
        ResultSet rs = null;
        
        try
        {
            s = c.createStatement();
            rs = s.executeQuery(consultaSQL);
            
            while(rs.next())
            {
                resultado = rs.getObject(1);
            }
        }
        catch(SQLException e)
        {
            e.printStackTrace();
        }
        
        return resultado;
    }
    
    public void EjecutarSentenciaSQLite(String sentencia)
    {
        sentencia = sentencia.replace("'", "\'");
        
        Statement s = null;
        
        try
        {
            s = c.createStatement();
            s.executeUpdate(sentencia);
        }
        catch(SQLException e)
        {
            e.printStackTrace();
        }
    }
    
    public void LeerInfoSQLite(String consulta)
    {
        Statement s = null;
        ResultSet rs = null;
        
        try
        {
            s = connection.createStatement();
            rs = s.executeQuery(consulta);
            
            while(rs.next())
            {
                System.out.println(rs.getObject(1));
            }
        }
        catch(SQLException e)
        {
            e.printStackTrace();
        }
    }
    
    public ResultSet ConsultarSQLite(String consulta)
    {
        Statement s = null;
        ResultSet rs = null;
        
        try
        {
            s = connection.createStatement();
            rs = s.executeQuery(consulta);
        }
        catch(SQLException e)
        {
            e.printStackTrace();
        }
        
        return rs;
    }
    
    public void VerificarConexionCorreo(final String FromUsername, final String password)
    {
        boolean b = false;
        
        String asunto = "Adsense " + new SimpleDateFormat("dd/MM/yyyy hh:mm:ss a").format(hoy);
        String contenido = FromUsername + " actualizó Google Adsense el " + new SimpleDateFormat("dd/MM/yyyy hh:mm:ss a").format(hoy);
        
        b = EnviarCorreo(FromUsername, password, FromUsername, asunto, contenido);
        
        if(b == true)
        {
            JOptionPane.showMessageDialog(null, "Conexion exitosa de correo");
        }
        else
        {
            JOptionPane.showMessageDialog(null, "Error en la conexion de correo");
        }
    }
    
    public Session ConectarCorreo(final String FromUsername, final String password)
    {
        // AQUI SE ESTABLECE LA CONEXION AL CORREO DE GMAIL
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
        new javax.mail.Authenticator() {
        protected PasswordAuthentication getPasswordAuthentication() {
            return new PasswordAuthentication(FromUsername, password);
        }
        });
        
        return session;
    }
    
    protected String ObtenerDeUsuarioCorreo()
    {
        return de_usuario_correo;
    }
    
    protected String ObtenerClaveCorreo()
    {
        return clave_correo;
    }
    
    protected String ObtenerAUsuarioCorreo()
    {
        return a_usuario_correo;
    }
    
    public boolean EnviarCorreo(String FromUsername, String password, String ToUsername, String asunto, String contenido)
    {
        boolean b = false;
        
        // EN ESTE CODIGO SE ENVIA EL MENSAJE A UN DETERMINADO CORREO
		try {
                    
                    Session session = ConectarCorreo(FromUsername, password);
                    
                    Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(FromUsername));
			message.setRecipients(Message.RecipientType.TO,
				InternetAddress.parse(ToUsername));
                        
                        // ASUNTO DEL MENSAJE
			message.setSubject(asunto);
                        
                        // CONTENIDO DEL MENSAJE
			message.setText(contenido);
 
			Transport.send(message);
                        
			//System.out.println("Done");
                        
                        b = true;
 
		} catch (MessagingException e) {
			//throw new RuntimeException(e);
                    e.printStackTrace();
                    b = false;
		}
                
                return b;
    }
    
    // Este método descarga las paginas del listado de preguntas, preguntas y publica contenido de las mismas
    
    public void ObtenerListadoSOF()
    {
        String s1 = "http://stackoverflow.com/questions?page=";
        String s2 = "&sort=newest";
        
        int k = 1;
        
        // Recorrer la paginacion de stackoverflow
        // y descargar todas las paginas que contienen el listado de preguntas
        
        for(k = 1; k <= 10; k++)
        {
            //System.out.println(String.valueOf(k) + ".html");
            //System.out.println(s1 + String.valueOf(k) + s2);
            
            // Descarga las paginas de stackoverflow que contiene listado de preguntas
            // Es necesario quitar comentario
            //this.GuardarURL(String.valueOf(k), s1 + String.valueOf(k) + s2);
            
            this.ObtenerPreguntaSOF(String.valueOf(k) + ".html");
        }
        
        //this.LeerArchivo("1.html");
        
        //this.LeerArchivo("what-is-the-most-efficient-way-to-concatenate-files-of-different-compression-typ.html");
    }
    
    private void saveUrlToFile(File saveFile, String location)
    {
        URL url;
        
        try
        {
            url = new URL(location);
            BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
            BufferedWriter out = new BufferedWriter(new FileWriter(saveFile));
            char[] cbuf=new char[255];
            while ((in.read(cbuf)) != -1) {
                out.write(cbuf);
            }
            in.close();
            out.close();
            
            System.out.println("Done");

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public void GuardarURL(String archivo, String direccion)
    {
        if(OSValidator.isWindows())
            saveUrlToFile(new File("C:\\" + archivo + ".html"), direccion);
        if(OSValidator.isUnix())
            saveUrlToFile(new File("/tmp/" + archivo + ".html"), direccion);
    }
    
    // Este método sirve para descargar la página de una pregunta de stackoverflow
    
    public void ObtenerPreguntaSOF(String p_archivo)
    {
        if(OSValidator.isWindows())
            p_archivo = "C:\\" + p_archivo;
        if(OSValidator.isUnix())
            p_archivo = "/tmp/" + p_archivo;
        
        File archivo = new File(p_archivo);
        
        String corte = "", titulo = "", enlace = "", tema = "";
        
        try
        {
            BufferedReader br = new BufferedReader(new FileReader(archivo));
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();

            while (line != null)
            {
                sb.append(line);
                sb.append("\n");
                line = br.readLine();
                
                //System.out.println(line);
                
                if(line.indexOf("<h3><a href=\"/questions/") > 0)
                {
                    titulo = line.substring(32, line.length());
                    titulo = titulo.substring(titulo.indexOf("/") + 1, titulo.indexOf("\""));
                    
                    //System.out.println(titulo);
                    
                    enlace = line.substring(22, line.length());
                    enlace = enlace.substring(0, enlace.indexOf("\""));
                    
                    enlace = "http://stackoverflow.com/" + enlace + ".html";
                    
                    //System.out.println(enlace);
                    
                    tema = titulo.replace("-", " ");
                    
                    //tema = JApertiumTranslator.Traducir(tema, Language.SPANISH, Language.PORTUGUESE);
                    //System.out.println(tema);
                    
                    //this.GuardarURL(titulo, enlace);
                    
                    System.out.println(tema);
                    System.out.println(enlace);
                    
                    this.ObtenerContenidoSOF(titulo + ".html", enlace, titulo, tema);
                    
                    //corte = line.substring(32, line.length());
                    //corte = corte.substring(corte.indexOf("/") + 1, corte.indexOf("\""));
                    //System.out.println(corte.replace("-", " "));
                }
            }
        
            /*String everything = sb.toString();
            
            System.out.println(everything);
            
            br.close();*/
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
    
    // Este método sirve para obtener el contenido de la pagina con pregunta
    
    public void ObtenerContenidoSOF(String p_archivo, String enlace, String titulo, String tema)
    {
        if(OSValidator.isWindows())
            p_archivo = "C:\\" + p_archivo;
        if(OSValidator.isUnix())
            p_archivo = "/tmp/" + p_archivo;
        
        File archivo = new File(p_archivo);
        
        String parrafo = "", codigo = "", contenido = "";
        boolean b = true;
        
        try
        {
            BufferedReader br = new BufferedReader(new FileReader(archivo));
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            
            while (line != null)
            {
                sb.append(line);
                sb.append("\n");
                line = br.readLine();
            }
            
            String everything = sb.toString();
            
            //System.out.println(everything);
            
            String todo = "";
            
            todo = everything;
            
            while(b == true)
            {
                if(todo.indexOf("<p>") > 0)
                {
                    b = true;
                    //System.out.println(todo.substring(todo.indexOf("<p>") + 3, todo.indexOf("</p>")));
                    
                    parrafo = todo.substring(todo.indexOf("<p>") + 3, todo.indexOf("</p>"));
                    todo = todo.substring(todo.indexOf("</p>") + 4, todo.length());
                }
                
                if(todo.indexOf("<code>") > 0)
                {
                    b = true;
                    //System.out.println(todo.substring(todo.indexOf("<code>") + 6, todo.indexOf("</code>")));
                    
                    codigo = todo.substring(todo.indexOf("<code>") + 6, todo.indexOf("</code>"));
                    
                    todo = todo.substring(todo.indexOf("</code>") + 7, todo.length());
                }
                
                if(todo.indexOf("<p>") > 0 || todo.indexOf("<code>") > 0)
                {
                    b = true;
                }
                else
                {
                    b = false;
                }
                
                contenido = parrafo + "\ṇ" + codigo;
                
                System.out.println(contenido);
            }
        }
        catch(Exception e)
        {
            //e.printStackTrace();
        }
    }
    
    public void ConectarBD(String servidor, String base, String usuario, String clave)
    {
        System.out.println("-------- PostgreSQL "
				+ "JDBC Connection Testing ------------");
 
		try {
 
			Class.forName("org.postgresql.Driver");
 
		} catch (ClassNotFoundException e) {
 
			System.out.println("Where is your PostgreSQL JDBC Driver? "
					+ "Include in your library path!");
			e.printStackTrace();
			return;
 
		}
 
		System.out.println("PostgreSQL JDBC Driver Registered!");
 
		connection = null;
 
		try {
 
			connection = DriverManager.getConnection(
					"jdbc:postgresql://" + servidor + ":5432/" + base, usuario,
					clave);
 
		} catch (SQLException e) {
 
			System.out.println("Connection Failed! Check output console");
			e.printStackTrace();
			return;
 
		}
 
		if (connection != null) {
			System.out.println("You made it, take control your database now!");
		} else {
			System.out.println("Failed to make connection!");
		}
    }
    
    public void CerrarConexion()
    {
        connection = null;
    }
    
    public void LlenarTabla(String query, JTable tabla)
    {
        Statement s = null;
        ResultSet rs = null;
        int k = 0;
        
        try
        {
            s = connection.createStatement();
            rs = s.executeQuery(query);
            
            while(rs.next())
            {
                this.Agregar_Fila(tabla);
                
                System.out.println(rs.getString(1));
                
                tabla.setValueAt(rs.getString(1), k, 0);
                tabla.setValueAt(rs.getString(2), k, 1);
                tabla.setValueAt(rs.getString(3), k, 2);
                tabla.setValueAt(rs.getString(4), k, 3);
                tabla.setValueAt(rs.getString(5), k, 4);
                tabla.setValueAt(rs.getString(6), k, 5);
                
                k++;
            }
        }
        catch(SQLException e)
        {
            e.printStackTrace();
        }
    }
    
    public void EjecutarProcedimiento(String query)
    {
        Statement s = null;
        ResultSet rs = null;
        
        try
        {
            s = connection.createStatement();
            rs = s.executeQuery(query);
            
            while(rs.next())
            {
                System.out.println(rs.getString(1));
            }
        }
        catch(SQLException e)
        {
            e.printStackTrace();
        }
    }
    
    public void Agregar_Fila(JTable tbl)
    {
        DefaultTableModel modelotabla = (DefaultTableModel) tbl.getModel();
        Vector nuevafila = new Vector();
        tbl.setModel(modelotabla);
        nuevafila.add(null);
        modelotabla.addRow(nuevafila);
    }

    public void Limpiar_Tabla(JTable tbl)
    {
        tbl.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "ID_Enlace", "Pagina", "Enlace", "Tema", "Fecha", "Idioma", "Publicado"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
    }
}
