export const templateHtml=`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title>New Template</title><!--[if (mso 16)]>
        <style type="text/css">
            a {text-decoration: none;}
        </style>
        <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <noscript>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:AllowPNG></o:AllowPNG>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        </noscript>
            <![endif]--><!--[if mso]><xml>
                <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
                    <w:DontUseAdvancedTypographyReadingMail/>
                </w:WordDocument>
            </xml><![endif]-->
        <style type="text/css">
            .section-title {
                outline:0;
            }
            .section-title amp-img {
                float:right;
                transition:transform 0.2s;
            }
            section[expanded] .section-title amp-img {
                transform:rotate(0deg);
                transition:transform 0.2s;
            }
            .rollover:hover .rollover-first {
                max-height:0px!important;
                display:none!important;
            }
            .rollover:hover .rollover-second {
                max-height:none!important;
                display:block!important;
            }
            .rollover span {
                font-size:0px;
            }
            u + .body img ~ div div {
                display:none;
            }
            #outlook a {
                padding:0;
            }
            span.MsoHyperlink,
            span.MsoHyperlinkFollowed {
                color:inherit;
                mso-style-priority:99;
            }
            a.es-button {
                mso-style-priority:100!important;
                text-decoration:none!important;
            }
            a[x-apple-data-detectors],
            #MessageViewBody a {
                color:inherit!important;
                text-decoration:none!important;
                font-size:inherit!important;
                font-family:inherit!important;
                font-weight:inherit!important;
                line-height:inherit!important;
            }
            .es-desk-hidden {
                display:none;
                float:left;
                overflow:hidden;
                width:0;
                max-height:0;
                line-height:0;
                mso-hide:all;
            }
            @media only screen and (max-width:600px) {
                .es-m-p0r {
                    padding-right:0px!important
                }
                .es-m-p0l {
                    padding-left:0px!important
                }
                .es-m-p20b {
                    padding-bottom:20px!important
                }
                .es-p-default { }
                *[class="gmail-fix"] {
                    display:none!important
                }
                p, a {
                    line-height:150%!important
                }
                h1, h1 a {
                    line-height:120%!important
                }
                h2, h2 a {
                    line-height:120%!important
                }
                h3, h3 a {
                    line-height:120%!important
                }
                h4, h4 a {
                    line-height:120%!important
                }
                h5, h5 a {
                    line-height:120%!important
                }
                h6, h6 a {
                    line-height:120%!important
                }
                .es-header-body p { }
                .es-content-body p { }
                .es-footer-body p { }
                .es-infoblock p { }
                h1 { 
                    font-size:36px!important; text-align:left 
                }
                h2 { 
                    font-size:26px!important; text-align:left 
                }
                h3 { 
                    font-size:20px!important; text-align:left 
                }
                h4 { 
                    font-size:24px!important; text-align:left 
                }
                h5 { 
                    font-size:20px!important; text-align:left 
                }
                h6 { 
                    font-size:16px!important; text-align:left 
                }
                .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a {
                    font-size:36px!important 
                }
                .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { 
                    font-size:26px!important 
                } 
                .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { 
                    font-size:20px!important 
                } 
                .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { 
                    font-size:24px!important 
                } 
                .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { 
                    font-size:20px!important 
                } 
                .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { 
                    font-size:16px!important 
                } 
                .es-menu td a { 
                    font-size:12px!important 
                } 
                .es-header-body p, .es-header-body a { 
                    font-size:14px!important 
                } 
                .es-content-body p, .es-content-body a { 
                    font-size:14px!important 
                } 
                .es-footer-body p, .es-footer-body a { 
                    font-size:14px!important 
                } 
                .es-infoblock p, .es-infoblock a { 
                    font-size:12px!important 
                } 
                .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { 
                    text-align:center!important 
                } 
                .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { 
                    text-align:right!important 
                } 
                .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { 
                    text-align:justify!important 
                } 
                .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { 
                    text-align:left!important 
                } 
                .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { 
                    display:inline!important 
                } 
                .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { 
                    display:inline!important 
                } 
                .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { 
                    line-height:0!important; font-size:0!important; display:block } 
                .es-spacer { 
                    display:inline-table 
                } 
                a.es-button, button.es-button { 
                    font-size:20px!important; padding:10px 20px 10px 20px!important; line-height:120%!important 
                } 
                a.es-button, button.es-button, .es-button-border { 
                    display:inline-block!important 
                } 
                .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { 
                    display:block!important 
                } 
                .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { 
                    display:inline-block!important 
                } 
                .es-adaptive table, .es-left, .es-right { 
                    width:100%!important 
                } 
                .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { 
                    width:100%!important; max-width:600px!important 
                } 
                .adapt-img { 
                    width:100%!important; height:auto!important 
                } 
                .es-mobile-hidden, .es-hidden { 
                    display:none!important 
                } 
                .es-desk-hidden { 
                    width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important 
                } 
                tr.es-desk-hidden { 
                    display:table-row!important 
                } 
                table.es-desk-hidden { 
                    display:table!important 
                } 
                td.es-desk-menu-hidden { 
                    display:table-cell!important 
                } 
                .es-menu td { 
                    width:1%!important 
                } 
                table.es-table-not-adapt, .esd-block-html table { width:auto!important 
                } 
                .h-auto { 
                    height:auto!important 
                } 
            }
            @media screen and (max-width:384px) {
                .mail-message-content { 
                    width:414px!important 
                } 
            }
        </style>
    </head>
    <body class="body" style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
        <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#fafafa"></v:fill>
            </v:background>
            <![endif]-->
            <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
                <tr>
                    <td valign="top" style="padding:0;Margin:0">
                        <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                            <tr>
                                <td align="center" class="es-info-area" style="padding:0;Margin:0">
                                    <table align="center" cellpadding="0" cellspacing="0" bgcolor="#00000000" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
                                        <tr>
                                            <td align="left" style="padding:20px;Margin:0">
                                                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" class="es-infoblock" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#CCCCCC;font-size:12px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">View online version</a></p></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" align="center" class="es-header" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-header-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                        <tr>
                                            <td align="left" style="padding:20px;Margin:0">
                                                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td valign="top" align="center" class="es-m-p0r" style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:20px;font-size:0px"><img src="https://etmuxly.stripocdn.email/content/guids/CABINET_887f48b6a2f22ad4fb67bc2a58c0956b/images/93351617889024778.png" alt="Logo" width="200" title="Logo" style="display:block;font-size:12px;border:0;outline:none;text-decoration:none"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding:0;Margin:0">
                                                                        <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr class="links">
                                                                                <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-top:15px;padding-right:5px;padding-bottom:15px;padding-left:5px">
                                                                                    <div style="vertical-align:middle;display:block"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#666666;font-size:14px">Shop</a></div>
                                                                                </td>
                                                                                <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-top:15px;padding-right:5px;padding-bottom:15px;padding-left:5px">
                                                                                    <div style="vertical-align:middle;display:block"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#666666;font-size:14px">New</a></div>
                                                                                </td>
                                                                                <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-top:15px;padding-right:5px;padding-bottom:15px;padding-left:5px">
                                                                                    <div style="vertical-align:middle;display:block"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#666666;font-size:14px">Sale</a></div>
                                                                                </td>
                                                                                <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-top:15px;padding-right:5px;padding-bottom:15px;padding-left:5px">
                                                                                    <div style="vertical-align:middle;display:block"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#666666;font-size:14px">About</a></div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-content-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                        <tr>
                                            <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0"><h1 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55.2px;color:#333333">Bienvenidos</h1></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px"><img src="https://etmuxly.stripocdn.email/content/guids/CABINET_a8ea6531bc3258a694b5f5ba1f1c7a21/images/57181618470076574.png" alt="" width="235" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-right:40px;padding-left:40px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#333333;font-size:16px">Hello, *|FNAME|*! Thank you for joining us. We offer you a trial subscription for 30 days! Enjoy it now!</p></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-right:20px;padding-left:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#5C68E2;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="" target="_blank" class="es-button" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#5C68E2;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2">GET 30 DAYS FOR FREE</a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-right:20px;padding-left:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:26px;font-style:normal;font-weight:bold;line-height:31.2px;color:#333333">Or choose your plan</h2></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-content-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                        <tr>
                                            <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:5px;padding-bottom:5px">
                                                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="left" style="padding:0;Margin:0"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:30px;color:#333333">• Monthly</h3></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:5px;padding-bottom:30px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
                                                <table cellspacing="0" cellpadding="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td valign="top" align="center" class="es-m-p0r es-m-p20b" style="padding:0;Margin:0;width:174px">
                                                            <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:1px;border-style:solid;border-color:#efefef;background-color:#ffffff;border-radius:5px" role="presentation">
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-bottom:10px;padding-top:30px;padding-right:10px;padding-left:10px"><h3 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#333333">Startup</h3></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">1-4 Employees</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><h1 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55.2px;color:#333333">$39</h1></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0px"><img src="https://etmuxly.stripocdn.email/content/guids/CABINET_606e6c6b803a6f21e4fb97e56b00b5ec/images/7081618469857707.png" alt="" height="27" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                </tr>
                                                                <tr class="es-visible-simple-html-only">
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Use our materials to learn to pair pieces of clothing&nbsp;right.</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:10px;padding-right:5px;padding-left:5px;padding-bottom:15px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="" target="_blank" class="es-button es-button-1621953453689" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:10px 25px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2;border-color:#ffffff">TRY NOW </a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                                                    </tr>
                                                </table><!--[if mso]></td><td style="width:174px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td align="left" class="es-m-p20b" style="padding:0;Margin:0;border-radius:5px;overflow:hidden;width:174px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid #5c68e2;border-right:1px solid #5c68e2;border-top:1px solid #5c68e2;border-bottom:1px solid #5c68e2;background-color:#ffffff;border-radius:5px" role="presentation">
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>POPULAR</strong></p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-right:10px;padding-left:10px"><h3 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#333333">Small Business</h3></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">5-19 Employees</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><h1 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55.2px;color:#333333">$79</h1></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0px"><img src="https://etmuxly.stripocdn.email/content/guids/CABINET_606e6c6b803a6f21e4fb97e56b00b5ec/images/54891618469972774.png" alt="" height="27" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                </tr>
                                                                <tr class="es-visible-simple-html-only">
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Same as in Startup. And the ability to use our clothes design tool.</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:10px;padding-right:5px;padding-left:5px;padding-bottom:15px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="" target="_blank" class="es-button es-button-1621953453691" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:10px 25px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2;border-color:#ffffff">TRY NOW </a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table><!--[if mso]></td><td style="width:20px"></td><td style="width:172px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" align="right" class="es-right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                    <tr>
                                                        <td valign="top" align="center" class="es-m-p0r es-m-p20b" style="padding:0;Margin:0;border-radius:5px;overflow:hidden;width:172px">
                                                            <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid #efefef;border-right:1px solid #efefef;border-top:1px solid #efefef;border-bottom:1px solid #efefef;background-color:#ffffff;border-radius:5px" role="presentation">
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-right:5px;padding-bottom:10px;padding-left:5px;padding-top:30px"><h3 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#333333">Enterprise</h3></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Unlimited Employees</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><h1 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55.2px;color:#333333">$99</h1></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0px"><img src="https://etmuxly.stripocdn.email/content/guids/CABINET_606e6c6b803a6f21e4fb97e56b00b5ec/images/96831618469973069.png" alt="" height="27" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                </tr>
                                                                <tr class="es-visible-simple-html-only">
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Same as in Small Business. And access to our video tutorials.</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:10px;padding-right:5px;padding-left:5px;padding-bottom:15px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="" target="_blank" class="es-button es-button-1621953453693" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:10px 25px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2;border-color:#ffffff">TRY NOW </a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table><!--[if mso]></td></tr></table><![endif]-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:5px;padding-bottom:5px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:81px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td align="center" valign="top" class="es-m-p20b" style="padding:0;Margin:0;width:81px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="left" style="padding:0;Margin:0"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:30px;color:#333333">• <b>Yearly&nbsp;</b></h3></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table><!--[if mso]></td><td style="width:5px"></td><td style="width:474px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" align="right" class="es-right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                    <tr>
                                                        <td align="left" style="padding:0;Margin:0;width:474px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="left" style="padding:0;Margin:0"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:30px;color:#333333"><b><a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;color:#5C68E2;font-size:20px" href=""><span style="background-color:#eeeeee">&nbsp;SAVE 20%&nbsp;</span></a></b></h3></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table><!--[if mso]></td></tr></table><![endif]-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:5px;padding-bottom:30px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
                                                <table cellspacing="0" cellpadding="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td valign="top" align="center" class="es-m-p0r es-m-p20b" style="padding:0;Margin:0;width:174px">
                                                            <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:1px;border-style:solid;border-color:#efefef;background-color:#ffffff;border-radius:5px" role="presentation">
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-bottom:10px;padding-top:30px;padding-right:10px;padding-left:10px"><h3 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#333333">Startup</h3></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">1-4 Employees</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><h1 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55.2px;color:#333333">$79</h1></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0px"><img src="https://etmuxly.stripocdn.email/content/guids/CABINET_606e6c6b803a6f21e4fb97e56b00b5ec/images/7081618469857707.png" alt="" height="27" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                </tr>
                                                                <tr class="es-visible-simple-html-only">
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Use our materials to learn to pair pieces of clothing&nbsp;right.</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:10px;padding-right:5px;padding-left:5px;padding-bottom:15px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="" target="_blank" class="es-button es-button-1621953480110" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:10px 25px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2;border-color:#ffffff">TRY NOW </a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                                                    </tr>
                                                </table><!--[if mso]></td><td style="width:174px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:174px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:1px;border-style:solid;border-color:#5c68e2;background-color:#ffffff;border-radius:5px" role="presentation">
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>POPULAR</strong></p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-right:10px;padding-left:10px"><h3 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#333333">Small Business</h3></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">5-19 Employees</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><h1 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55.2px;color:#333333">$99</h1></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0px"><img src="https://etmuxly.stripocdn.email/content/guids/CABINET_606e6c6b803a6f21e4fb97e56b00b5ec/images/54891618469972774.png" alt="" height="27" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                </tr>
                                                                <tr class="es-visible-simple-html-only">
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Same as in Startup. And the ability to use our clothes design tool.</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:10px;padding-right:5px;padding-left:5px;padding-bottom:15px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="" target="_blank" class="es-button es-button-1621953480112" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:10px 25px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2;border-color:#ffffff">TRY NOW </a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table><!--[if mso]></td><td style="width:20px"></td><td style="width:172px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" align="right" class="es-right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                    <tr>
                                                        <td valign="top" align="center" class="es-m-p0r es-m-p20b" style="padding:0;Margin:0;border-radius:5px;overflow:hidden;width:172px">
                                                            <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid #efefef;border-right:1px solid #efefef;border-top:1px solid #efefef;border-bottom:1px solid #efefef;background-color:#ffffff;border-radius:5px" role="presentation">
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-right:5px;padding-bottom:10px;padding-left:5px;padding-top:30px"><h3 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#333333">Enterprise</h3></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Unlimited Employees</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><h1 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55.2px;color:#333333">$199</h1></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0px"><img src="https://etmuxly.stripocdn.email/content/guids/CABINET_606e6c6b803a6f21e4fb97e56b00b5ec/images/96831618469973069.png" alt="" height="27" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                </tr>
                                                                <tr class="es-visible-simple-html-only">
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-right:10px;padding-left:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Same as in Small Business. And access to our video tutorials.</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="Margin:0;padding-top:10px;padding-right:5px;padding-left:5px;padding-bottom:15px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="" target="_blank" class="es-button es-button-1621953480114" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:10px 25px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2;border-color:#ffffff">TRY NOW </a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table><!--[if mso]></td></tr></table><![endif]-->
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" align="center" class="es-footer" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table align="center" cellpadding="0" cellspacing="0" class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:640px" role="none">
                                        <tr>
                                            <td align="left" style="Margin:0;padding-bottom:20px;padding-top:20px;padding-right:20px;padding-left:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="left" style="padding:0;Margin:0;width:600px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:15px;padding-top:15px;font-size:0">
                                                                        <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr>
                                                                                <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="Facebook" src="https://etmuxly.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                                <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="X" src="https://etmuxly.stripocdn.email/content/assets/img/social-icons/logo-black/x-logo-black.png" alt="X" width="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                                <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="Instagram" src="https://etmuxly.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                                <td align="center" valign="top" style="padding:0;Margin:0"><img title="Youtube" src="https://etmuxly.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">Style Casual&nbsp;© 2021 Style Casual, Inc. All Rights Reserved.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">4562 Hazy Panda Limits, Chair Crossing, Kentucky, US, 607898</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding:0;Margin:0">
                                                                        <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr class="links">
                                                                                <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px">
                                                                                    <div style="vertical-align:middle;display:block"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Visit Us </a></div>
                                                                                </td>
                                                                                <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;border-left:1px solid #cccccc">
                                                                                    <div style="vertical-align:middle;display:block"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Privacy Policy</a></div>
                                                                                </td>
                                                                                <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;border-left:1px solid #cccccc">
                                                                                    <div style="vertical-align:middle;display:block"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Terms of Use</a></div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                            <tr>
                                <td align="center" class="es-info-area" style="padding:0;Margin:0">
                                    <table align="center" cellpadding="0" cellspacing="0" bgcolor="#00000000" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
                                        <tr>
                                            <td align="left" style="padding:20px;Margin:0">
                                                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" class="es-infoblock" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#CCCCCC;font-size:12px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a>No longer want to receive these emails?&nbsp;<a href="" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">Unsubscribe</a>.<a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a></p></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
</html>
`