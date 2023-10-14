const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function sendgrid(data) {

    if (data.checkIn) {
        const bookingData = {
            to: process.env.MAIL_TO, // Change to your recipient
            from: process.env.MAIL_FROM, // Change to your verified sender
            subject: 'Customer Booking Details',
            html: `<!DOCTYPE html>
            <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
            
            <head>
                <title></title>
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                <meta content="width=device-width,initial-scale=1" name="viewport" />
                <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
                <style>
                    * {
                        box-sizing: border-box
                    }
            
                    body {
                        margin: 0;
                        padding: 0
                    }
            
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: inherit !important
                    }
            
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none
                    }
            
                    p {
                        line-height: inherit
                    }
            
                    h1 {
                        font-size: 15px !important;
                    }
            
                    .tinyMce-placeholder {
                        font-size: 15px;
                        font-weight: bold;
                    }
            
            
            
                    .desktop_hide,
                    .desktop_hide table {
                        mso-hide: all;
                        display: none;
                        max-height: 0;
                        overflow: hidden
                    }
            
                    @media (max-width:500px) {
                        .desktop_hide table.icons-inner {
                            display: inline-block !important
                        }
            
                        .icons-inner {
                            text-align: center
                        }
            
                        .icons-inner td {
                            margin: 0 auto
                        }
            
                        .row-content {
                            width: 100% !important
                        }
            
                        .mobile_hide {
                            display: none
                        }
            
                        .stack .column {
                            width: 100%;
                            display: block
                        }
            
                        .mobile_hide {
                            min-height: 0;
                            max-height: 0;
                            max-width: 0;
                            overflow: hidden;
                            font-size: 0
                        }
            
                        .desktop_hide,
                        .desktop_hide table {
                            display: table !important;
                            max-height: none !important
                        }
                    }
                </style>
            </head>
            
            <body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none">
                <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;background-image:none;background-position:top left;background-size:auto;background-repeat:no-repeat"
                    width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#FDAEA9;color:#000;width:480px"
                                                    width="480">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0;padding-left:0">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <img src="http://3.108.134.60:3051/images/logo/logo-1.png"
                                                                                    style="display:block;height:auto;border:0;width:144px;max-width:100%"
                                                                                    width="144" /></div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad" style="width:100%;text-align:center">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <strong><span class="tinyMce-placeholder">Online
                                                                                        Booking Request</span></strong>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table border="0" cellpadding="10" cellspacing="0"
                                                                    class="divider_block block-3" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad">
                                                                            <div align="center" class="alignment">
                                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                                    role="presentation"
                                                                                    style="mso-table-lspace:0;mso-table-rspace:0"
                                                                                    width="100%">
                                                                                    <tr>
                                                                                        <td class="divider_inner"
                                                                                            style="font-size:1px;line-height:1px;border-top:1px solid #bbb">
                                                                                            <span> </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#FDAEA9;color:#000;border-radius:0;width:480px"
                                                    width="480">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="33.333333333333336%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder">Customer
                                                                                    Name</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-2"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="66.66666666666667%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder"
                                                                                    style="font-style: italic; font-weight: normal;">${data.firstName} ${data.lastName}</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#FDAEA9;color:#000;border-radius:0;width:480px"
                                                    width="480">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="33.333333333333336%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder">Check In</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-2"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="66.66666666666667%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder"
                                                                                    style="font-style: italic;font-weight: normal;">${data.checkIn}</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#FDAEA9;color:#000;border-radius:0;width:480px"
                                                    width="480">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="33.333333333333336%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder">Check Out</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-2"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="66.66666666666667%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder"
                                                                                    style="font-style: italic;font-weight: normal;">${data.checkIn}</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#FDAEA9;color:#000;border-radius:0;width:480px"
                                                    width="480">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="33.333333333333336%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder">Rooms</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-2"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="66.66666666666667%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder"
                                                                                    style="font-style: italic;font-weight: normal;">${data.room}</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#FDAEA9;color:#000;border-radius:0;width:480px"
                                                    width="480">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="33.333333333333336%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder">Adults</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-2"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="66.66666666666667%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="font-weight: normal !important;font-style: italic;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                ${data.adult}</h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#FDAEA9;color:#000;border-radius:0;width:480px"
                                                    width="480">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;padding-bottom: 0rem;"
                                                                width="33.333333333333336%";>
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder">Children</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-2"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="66.66666666666667%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;text-align:center;padding-top:5px;padding-bottom:5px">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder" style="font-weight: normal !important; font-style: italic;">${data.childrenb}</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#FDAEA9;color:#000;border-radius:0;width:480px"
                                                    width="480">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="100%">
                                                                <table border="0" cellpadding="10" cellspacing="0"
                                                                    class="list_block block-1" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad">
                                                                            <ul start="1"
                                                                                style="margin:0;padding:0;margin-left:20px;list-style-type:revert;color:#000;font-size:14px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0">
                                                                                <li style="margin-bottom:0">Child 1 age: LIVE</li>
                                                                                <li style="margin-bottom:0">Child 2 age: LIVE</li>
                                                                                <li style="margin-bottom:0">Child 3 age: LIVE</li>
                                                                                <li style="margin-bottom:0">Child 4 age: LIVE</li>
                                                                                <li style="margin-bottom:0">Child 5 age: LIVE</li>
                                                                                <li style="margin-bottom:0">Child 6 age: LIVE</li>
                                                                                <li style="margin-bottom:0">Child 7 age: LIVE</li>
                                                                                <li>Child 8 age: LIVE</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table border="0" cellpadding="10" cellspacing="0"
                                                                    class="divider_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad">
                                                                            <div align="center" class="alignment">
                                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                                    role="presentation"
                                                                                    style="mso-table-lspace:0;mso-table-rspace:0"
                                                                                    width="100%">
                                                                                    <tr>
                                                                                        <td class="divider_inner"
                                                                                            style="font-size:1px;line-height:1px;border-top:1px solid #bbb">
                                                                                            <span> </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-3" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad" style="width:100%;text-align:center; padding-bottom: 0rem;">
                                                                            <h1
                                                                                style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                                <span class="tinyMce-placeholder" style="font-weight: normal !important; font-style: normal; font-size: 15px;">© Himalaya Boutique
                                                                                    Hotel</span>
                                                                            </h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#FDAEA9;color:#000;width:480px"
                                                    width="480">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="icons_block block-1" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="vertical-align:middle;color:#9d9d9d;font-family:inherit;font-size:15px;padding-bottom:5px;padding-top:5px;text-align:center">
                                                                            <table cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace:0;mso-table-rspace:0"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="alignment"
                                                                                        style="vertical-align:middle;text-align:center">
                                                                                        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                        <!--[if !vml]><!-->
                                                                                        <table cellpadding="0" cellspacing="0"
                                                                                            class="icons-inner" role="presentation"
                                                                                            style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block;margin-right:-4px;padding-left:0;padding-right:0">
                                                                                            <!--<![endif]-->
                                                                                            <tr>
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
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table><!-- End -->
            
                <script>
            
                </script>
            </body>
            
            </html>`,
        }
        sendMail(bookingData);
    }
    else {
        const contactData = {
            to: process.env.MAIL_TO, // Change to your recipient
            from: process.env.MAIL_FROM, // Change to your verified sender
            subject: 'Contact',
            html: ` Name - ${data.name} <br>
                    Email - ${data.emailId} <br>
                    Message - ${data.message}`,
        }
        sendMail(contactData);
    }
}

// sendgrid API
function sendMail(msg) {
    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })
}


module.exports = { sendgrid }
