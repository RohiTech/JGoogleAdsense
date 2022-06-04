/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jgoogleadsense;

/**
 *
 * @author lauren
 */
public class JNombres
{
    MyClass c = new MyClass();
    
    public JNombres()
    {
    }
    
    public void Publicar_Contenido(String directorio, String archivo, int caso)
    {
        c.EstablecerDeUsuarioCorreo("");
        c.EstablecerClaveCorreo("");
        c.EstablecerAUsuarioCorreo("@blogger.com");
        
        /*System.out.println(c.ObtenerDeUsuarioCorreo());
        System.out.println(c.ObtenerClaveCorreo());
        System.out.println(c.ObtenerAUsuarioCorreo());*/
        
        String contenidoHTML = "", texto = "", contenido = "\n\n", asunto = "";
        int k = 0;
        
        if(archivo.indexOf(".htm") > 0 && !archivo.equals("sh39.htm"))
        {
            //System.out.println(archivo);
            
            //if(archivo.equals("A.htm"))
            //{
                asunto = archivo.replace(".htm", "");
                
                if(caso == 1)
                    asunto = "Nombres de niñas con la letra " + asunto;
                if(caso == 2)
                    asunto = "Nombres de niños con la letra " + asunto;
                
                System.out.println(asunto);
                
                contenidoHTML = c.LeerArchivo(directorio);
                
                //System.out.println(contenidoHTML);
                
                texto = contenidoHTML;
                
                //System.out.println(texto.indexOf("<td class=\"stTituloChico\"><b>"));
                
                while(texto.indexOf("<td class=\"stTituloChico\"><b>") > 0)
                {
                    k++;
                    
                    // Obtener el nombre del bebe
                    texto = texto.substring(texto.indexOf("<td class=\"stTituloChico\"><b>") + 29, texto.length());
                    contenido = contenido + String.valueOf(k) + ") " + texto.substring(0, texto.indexOf("</b></td>")) + ": \n";
                    texto = texto.substring(texto.indexOf("</b></td>"), texto.length());
                    
                    // Obtener el significado del nombre
                    texto = texto.substring(texto.indexOf("<div class=\"stDivTexto\">") + 24, texto.length());
                    contenido = contenido + texto.substring(0, texto.indexOf("</div></td>")) + "\n\n";
                    texto = texto.substring(texto.indexOf("</div></td>"), texto.length());
                }
                
                contenido = contenido.replace("<i>", "");
                contenido = contenido.replace("</i>", "");
                
                c.EnviarCorreo(c.ObtenerDeUsuarioCorreo(), c.ObtenerClaveCorreo(), c.ObtenerAUsuarioCorreo(), asunto, contenido);
                
                System.out.println(contenido);
                
                k = 0;
            //}
        }
        
        //EnviarCorreo(String FromUsername, String password, String ToUsername, String asunto, String contenido)
    
    }
}
 