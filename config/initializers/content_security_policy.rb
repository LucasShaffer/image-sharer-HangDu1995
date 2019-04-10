# Be sure to restart your server when you modify this file.

# Define an application-wide content security policy
# For further information see the following documentation
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

Rails.application.config.content_security_policy do |policy|
  if Rails.env.development?
    # added to enable webpack-dev-server
    # https://github.com/rails/webpacker/blob/master/README.md#development
    policy.connect_src :self, :https, 'http://localhost:3035', 'ws://localhost:3035'
  else
    policy.connect_src :self, :https
  end

  policy.default_src :self, :https
  policy.font_src    :self, :https, :data, 'https://cdn.jsdeliv.net'
  policy.img_src     :self, :http, :https, :data
  policy.object_src  :none

  # unsafe-eval is needed for script-src due to bootstrap
  # There is an outstanding issue to hopefully make that unnecessary:
  # https://github.com/twbs/bootstrap/issues/17964
  policy.script_src  :self, :http, 'https://cdnjs.cloudflare.com', 'https://code.jquery.com', 'https://maxcdn.bootstrapcdn.com'
  policy.style_src   :self, :https, 'https://maxcdn.bootstrapcdn.com'

  # Specify URI for violation reports
  # policy.report_uri "/csp-violation-report-endpoint"
end

# If you are using UJS then enable automatic nonce generation
# Rails.application.config.content_security_policy_nonce_generator = -> request { SecureRandom.base64(16) }

# Report CSP violations to a specified URI
# For further information see the following documentation:
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
# Rails.application.config.content_security_policy_report_only = true
