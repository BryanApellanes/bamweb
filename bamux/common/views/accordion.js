(function(){dust.register("accordion",body_0);function body_0(chk,ctx){return chk.write("<!--  {    id: \"string\",    sections: [      {id: \"string\", title: \"string\", content: \"string\"}    ]  }-->   <div class=\"accordion\" id=\"").reference(ctx.get("id"),ctx,"h").write("\">  ").section(ctx.get("sections"),ctx,{"block":body_1},{"parentid":ctx.get("id")}).write("</div>");}function body_1(chk,ctx){return chk.write("  <div class=\"accordion-group\">    <div class=\"accordion-heading\">      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#").reference(ctx.get("parentid"),ctx,"h").write("\" href=\"#").reference(ctx.get("id"),ctx,"h").write("Body\">        ").reference(ctx.get("title"),ctx,"h").write("      </a>    </div>    <div id=\"").reference(ctx.get("id"),ctx,"h").write("Body\" class=\"accordion-body collapse\">      <div class=\"accordion-inner\" id=\"").reference(ctx.get("id"),ctx,"h").write("Content\">        ").reference(ctx.get("content"),ctx,"h").write("      </div>    </div>  </div>  ");}return body_0;})();