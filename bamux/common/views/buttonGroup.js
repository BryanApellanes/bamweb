(function(){dust.register("buttonGroup",body_0);function body_0(chk,ctx){return chk.write("<div class=\"btn-group\">  ").section(ctx.get("items"),ctx,{"block":body_1},null).write("</div>");}function body_1(chk,ctx){return chk.write("  <button class=\"btn\" id=\"").reference(ctx.get("id"),ctx,"h").write("\">").reference(ctx.get("text"),ctx,"h").write("</button>    ");}return body_0;})();